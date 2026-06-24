import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "fs/promises";
import app from "./src/worker/index.ts";

// 1. Serve static files from the build folder if they exist
app.use("/*", serveStatic({ root: "./dist/client" }));

// 2. Fallback to index.html for all other frontend routes (SPA support)
app.get("/*", async (c) => {
  if (c.req.path.startsWith("/api/")) {
    return c.notFound();
  }
  try {
    const html = await readFile("./dist/client/index.html", "utf-8");
    return c.html(html);
  } catch (err) {
    return c.text("Frontend not built yet. Please run build first.", 404);
  }
});

const port = process.env.PORT || 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port: Number(port),
});
