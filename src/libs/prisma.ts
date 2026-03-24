import "dotenv/config";
import config from "./config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export { prisma };