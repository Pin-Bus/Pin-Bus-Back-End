import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env from the ORM folder
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("DB URL:", process.env.DATABASE_URL); // debug check

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, "entities/*.ts")],
  migrations: [path.join(__dirname, "migrations/*.ts")],
});
