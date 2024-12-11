import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";

const prisma = new PrismaClient();

export default async function appRoute(app: FastifyInstance) {
  app.get('/habits', async (req, res) => {
    const habits = await prisma.habit.findMany()
    return res.send({habits})
  })
  
}