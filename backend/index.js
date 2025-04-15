import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoute.js";
import Authrouter from "./routes/AuthRouter.js";
import connectDB from "./database/db.js";
import ProductRouter from "./routes/ProductRouter.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
};

startServer();

app.use("/api", route);
app.use("/auth", Authrouter);
app.use("/products", ProductRouter);
