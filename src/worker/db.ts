import type { Db } from "mongodb";
import { Context } from "hono";

export interface VisitorLog {
  id?: string;
  ip: string;
  country: string;
  city: string;
  region: string;
  latitude: string;
  longitude: string;
  user_agent: string;
  consent_action: "accept" | "reject";
  timestamp: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  visitor_log_id?: string | null;
  timestamp: string;
}

export interface AnalyticsStats {
  totalPageviews: number;
  accepts: number;
  rejects: number;
  visitors: VisitorLog[];
  messages: ContactMessage[];
}

let cachedClient: any = null;
let cachedDb: Db | null = null;

async function getDb(c: Context): Promise<Db> {
  const uri = c.env?.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }
  
  if (cachedDb) {
    return cachedDb;
  }
  
  if (!cachedClient) {
    const { MongoClient } = await import("mongodb");
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }
  
  const db = cachedClient.db();
  cachedDb = db;
  return db;
}

/**
 * Log a visitor's choice and details
 */
export async function logVisitor(
  c: Context,
  ip: string,
  country: string,
  city: string,
  region: string,
  latitude: string,
  longitude: string,
  userAgent: string,
  consent: "accept" | "reject"
): Promise<string> {
  try {
    const db = await getDb(c);
    const collection = db.collection("visitor_logs");
    const timestamp = new Date().toISOString();
    
    const result = await collection.insertOne({
      ip,
      country,
      city,
      region,
      latitude,
      longitude,
      user_agent: userAgent,
      consent_action: consent,
      timestamp,
    });
    
    return result.insertedId.toString();
  } catch (err) {
    console.error("MongoDB logVisitor error:", err);
    return "";
  }
}

/**
 * Save contact submission
 */
export async function saveContact(
  c: Context,
  name: string,
  email: string,
  message: string,
  visitorLogId: string | null
): Promise<boolean> {
  try {
    const db = await getDb(c);
    const collection = db.collection("contact_messages");
    const timestamp = new Date().toISOString();
    
    await collection.insertOne({
      name,
      email,
      message,
      visitor_log_id: visitorLogId,
      timestamp,
    });
    
    return true;
  } catch (err) {
    console.error("MongoDB saveContact error:", err);
    return false;
  }
}

/**
 * Retrieve stats and logs for the admin dashboard
 */
export async function getStats(c: Context): Promise<AnalyticsStats> {
  try {
    const db = await getDb(c);
    const visitorColl = db.collection("visitor_logs");
    const messageColl = db.collection("contact_messages");
    
    const totalPageviews = await visitorColl.countDocuments();
    const accepts = await visitorColl.countDocuments({ consent_action: "accept" });
    const rejects = await visitorColl.countDocuments({ consent_action: "reject" });
    
    const visitorsRaw = await visitorColl.find().sort({ timestamp: -1 }).limit(100).toArray();
    const messagesRaw = await messageColl.find().sort({ timestamp: -1 }).limit(100).toArray();
    
    const visitors: VisitorLog[] = visitorsRaw.map((doc) => ({
      id: doc._id.toString(),
      ip: doc.ip || "",
      country: doc.country || "",
      city: doc.city || "",
      region: doc.region || "",
      latitude: doc.latitude || "0",
      longitude: doc.longitude || "0",
      user_agent: doc.user_agent || "",
      consent_action: doc.consent_action || "reject",
      timestamp: doc.timestamp || "",
    }));
    
    const messages: ContactMessage[] = messagesRaw.map((doc) => ({
      id: doc._id.toString(),
      name: doc.name || "",
      email: doc.email || "",
      message: doc.message || "",
      visitor_log_id: doc.visitor_log_id || null,
      timestamp: doc.timestamp || "",
    }));
    
    return {
      totalPageviews,
      accepts,
      rejects,
      visitors,
      messages,
    };
  } catch (err) {
    console.error("MongoDB getStats error:", err);
    return {
      totalPageviews: 0,
      accepts: 0,
      rejects: 0,
      visitors: [],
      messages: [],
    };
  }
}
