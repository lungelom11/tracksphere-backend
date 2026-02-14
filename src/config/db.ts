import 'dotenv/config'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from "@prisma/client";
// use `prisma` in your application to read and write data in your DB// use `prisma` in your application to read and write data in your DB
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})

export const prisma = new PrismaClient({ adapter })
