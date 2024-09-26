import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.APP_PORT;

app
  .listen(port, () => {
    console.info(`App is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
