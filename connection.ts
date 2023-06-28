import { Pool, PoolConfig } from "pg";
import dotenv from "dotenv";
dotenv.config();

const config: PoolConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
};

const dbPool = new Pool(config);

export default dbPool;
