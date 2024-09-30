import "dotenv/config";
import { app } from "./src/app";
const port = process.env.APP_PORT;

app
  .listen(port, () => {
    console.info(`App is listening on http://localhost:${port}/`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
