import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoDB_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB_URI);
    console.log("✅  MongoDB connected");
  } catch (error) {
    console.error(" ❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
