import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { books } from "../data.ts";
const routes = new Router()
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .post("/", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/:id", (context) => {
    if (books.has(context?.params?.id)) {
      context.response.body = books.get(context.params.id);
    }
  })
  .patch("/:id", (context) => {
    if (books.has(context?.params?.id)) {
      context.response.body = books.get(context.params.id);
    }
  })
  .delete("/:id", (context) => {
    if (books.has(context?.params?.id)) {
      context.response.body = books.get(context.params.id);
    }
  })
  .routes();
const indexRouter = { path: "/", routes };
export default indexRouter;
