import express from "express";

import { config } from "dotenv";
import paymentRouter from "./router/paymentRouter.js";
import bodyParser from "body-parser";
import cors from "cors";

export const app = express();

config({
  path: "./config/config.env",
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", paymentRouter);

app.get("/getkey", (req, res) => {
  return res.status(200).json({
    key: process.env.RAZORPAY_API_KEY,
  });
});
