import dotenv from "dotenv"

dotenv.config()

type Config = {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number
}

const config: Config = {
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "root",
  database: process.env.DATABASE_NAME || "presensi-kehadiran",
  port: Number(process.env.PORT) || 3000
}

export default config