import { Pool, PoolConfig } from "pg";
const config: PoolConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};
const dbPool = new Pool(config);
export default dbPool;
