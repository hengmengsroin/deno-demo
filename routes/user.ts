import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const routes = new Router()
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .post("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/:id", (context) => {
    context.response.body = "Hello world!";
  })
  .patch("/:id", (context) => {
    context.response.body = "Hello world!";
  })
  .delete("/:id", (context) => {
    context.response.body = "Hello world!";
  })
  .routes();
const userRouter = { path: "/users", routes };
export default userRouter;
