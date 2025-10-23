import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://newdatabase:Mohin.%4012@bdcalling.xxtoxdo.mongodb.net/?retryWrites=true&w=majority&appName=BDcalling";

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
}