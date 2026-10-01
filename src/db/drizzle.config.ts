import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

const sqlHost = process.env.SQL_HOST;
const sqlDbName = process.env.SQL_DB_NAME;
const user = process.env.SQL_ADMIN_USER;
const password = process.env.SQL_ADMIN_PASSWORD;

if (!sqlHost) {
  console.warn("SQL_HOST not set for drizzle-kit config. Using default placeholder.");
}
if (!sqlDbName) {
  console.warn("SQL_DB_NAME not set for drizzle-kit config.");
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  schemaFilter: ["public"],
  dbCredentials: {
    host: sqlHost || "/cloudsql/genial-discipline-m4mm2:asia-south1:ai-studio-c7049868",
    user: user || "postgres",
    password: password || "",
    database: sqlDbName || "postgres",
    ssl: false,
  },
  verbose: true,
});
