import { FastifyInstance } from "fastify";

export default async function appRoute(app: FastifyInstance) {
  app.get('/habits', () => {
    return 'hello'
  })
  
}