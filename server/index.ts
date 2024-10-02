import "dotenv/config";
import { app } from "./src/app";
import { myDataSource } from "./database";

const { APP_PORT } = process.env;

app
  .listen(APP_PORT, async () => {
    myDataSource.initialize();
    console.info(`App is listening on http://localhost:${APP_PORT}/`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
