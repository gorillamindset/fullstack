import dotenv, { configDotenv } from "dotenv";
import express from "express";
import { connectDB } from "./db/index.js";

configDotenv({
  path: "./env",
});
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running @ port: ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.log("Error: ", error);
      process.exitCode = 1;
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !! ", error);
  });

/*
(async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
    app.on("error", (error) => {
      console.log("Error: ", error);
      process.exitCode = 1;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error", error);
  }
})();
*/
