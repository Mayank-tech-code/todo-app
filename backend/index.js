import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoute.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb+srv://youtubeUser:admin@cluster0.n1t37zp.mongodb.net/CRUD")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", route);
