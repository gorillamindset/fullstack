import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB Host :`,
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log(`MongoDB connection Error: `, error);
  }
}
