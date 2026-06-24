import { Hono } from "hono";
import { cors } from "hono/cors";
import { logVisitor, saveContact, getStats } from "./db";

type Env = {
  MONGODB_URI?: string;
  ADMIN_PASSCODE?: string;
};

const app = new Hono<{ Bindings: Env }>();

// Enable CORS
app.use("*", cors());

// Health check / API status
app.get("/api/health", (c) => c.json({ status: "ok" }));

// Route to track visitor consent action
app.post("/api/track", async (c) => {
  try {
    const { consent, ip: clientIp, country, city, region, latitude, longitude } = 
      await c.req.json<{
        consent: "accept" | "reject";
        ip?: string;
        country?: string;
        city?: string;
        region?: string;
        latitude?: string;
        longitude?: string;
      }>();

    // Use headers if present, else fallback
    const ip = clientIp || c.req.header("cf-connecting-ip") || "127.0.0.1";
    const userAgent = c.req.header("user-agent") || "Unknown";

    // Cloudflare geolocation fallback if not sent in body (Client-side geo is preferred on Render)
    const cf = (c.req.raw as any).cf;
    const finalCountry = country || cf?.country || "Local";
    const finalCity = city || cf?.city || "Local";
    const finalRegion = region || cf?.region || "Local";
    const finalLat = latitude || (cf?.latitude ? String(cf.latitude) : "0");
    const finalLng = longitude || (cf?.longitude ? String(cf.longitude) : "0");

    const visitorId = await logVisitor(
      c,
      ip,
      finalCountry,
      finalCity,
      finalRegion,
      finalLat,
      finalLng,
      userAgent,
      consent
    );

    return c.json({ success: true, visitorId });
  } catch (err: any) {
    console.error("Tracking API error:", err);
    return c.json({ success: false, error: err.message }, 500);
  }
});

// Route to handle Contact Form submissions
app.post("/api/contact", async (c) => {
  try {
    const { name, email, message, visitorId } = await c.req.json<{
      name: string;
      email: string;
      message: string;
      visitorId?: string | null;
    }>();

    if (!name || !email || !message) {
      return c.json({ success: false, error: "Name, email, and message are required" }, 400);
    }

    const success = await saveContact(c, name, email, message, visitorId || null);
    return c.json({ success });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return c.json({ success: false, error: err.message }, 500);
  }
});

// Route to get admin statistics (Secure)
app.get("/api/admin/stats", async (c) => {
  const authHeader = c.req.header("Authorization");
  const token = authHeader?.replace("Bearer ", "");
  
  // Set passcode (can be configured in env, default to admin123)
  const requiredPasscode = c.env?.ADMIN_PASSCODE || "admin123";

  if (token !== requiredPasscode) {
    return c.json({ success: false, error: "Unauthorized" }, 401);
  }

  try {
    const stats = await getStats(c);
    return c.json({ success: true, stats });
  } catch (err: any) {
    console.error("Stats API error:", err);
    return c.json({ success: false, error: err.message }, 500);
  }
});

export default app;
