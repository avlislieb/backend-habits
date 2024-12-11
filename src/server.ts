import Fastify from "fastify";
import appRoute from "./routes";

const app = Fastify()


app.register(appRoute)

app.listen({ port: 3333 })
  .then(() => {
    console.log(`Server is running`);
  })
  .catch(err => {
    console.error("Error starting server:", err);
    process.exit(1);
  });