import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db.sqlite",
  entities: ["./src/entities/*.ts"],
  synchronize: true, // DELETE BEFORE DEPLOY !!!
});
