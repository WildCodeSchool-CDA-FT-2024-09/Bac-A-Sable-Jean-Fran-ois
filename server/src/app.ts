import express from "express";
import router from "./router";
import cors from "cors";
const { FRONTEND_URL } = process.env;

export const app = express();

app.use(
  cors({
    origin: FRONTEND_URL as string,
  })
);

app.use(express.json());

app.use(router);
