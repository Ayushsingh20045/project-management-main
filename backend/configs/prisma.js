// import "dotenv/config";
// import { defineConfig, env } from "prisma/config";
// import { PrismaClient } from "@prisma/client";
// export const prisma = new PrismaClient()
// export default defineConfig({
//   schema: "prisma/schema.prisma",
//   datasource: {
//     url: env("DIRECT_URL"),
//   },
// });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
export { prisma };