import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
  return new PrismaClient({
    // Fallback URL during Vercel build process when env vars might be missing
    accelerateUrl: process.env.DATABASE_URL || "prisma+postgres://dummy:5432/db",
  })
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma
