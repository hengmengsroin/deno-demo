import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const routes = new Router()
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .post("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/:id", (context) => {})
  .patch("/:id", (context) => {})
  .delete("/:id", (context) => {})
  .routes();
const indexRouter = { path: "/", routes };
export default indexRouter;
