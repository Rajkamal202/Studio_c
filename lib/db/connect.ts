import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/coupon-system";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Extend global type to store the cached connection
declare global {
  var mongoose: { conn: Connection | null; promise: Promise<Connection> | null };
}

// Use a global cache to prevent multiple connections in dev mode
let cached = global.mongoose || { conn: null, promise: null };

async function dbConnect(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose.connection); // Extract connection
  }

  cached.conn = await cached.promise;
  global.mongoose = cached; // Store in global object

  return cached.conn;
}

export default dbConnect;


