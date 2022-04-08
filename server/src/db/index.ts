import { Pool, QueryArrayConfig } from "pg"
import "dotenv/config"

const connectionString = `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`
const pool = new Pool({
  connectionString: connectionString,
  ssl: process.env.NODE_ENV == 'PROD' ? { rejectUnauthorized: false } : false
})

module.exports = {
  query: (text: QueryArrayConfig<any>, params: any) => pool.query(text, params)
}
