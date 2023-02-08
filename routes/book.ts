import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getAllBook } from "../controllers/book.ts";

const bookRoutes = new Router()
  .get("/", async (context) => {
    context.response.body = await getAllBook();
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

const bookRouter = { path: "/books", routes: bookRoutes };
export default bookRouter;
