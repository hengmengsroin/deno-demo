import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getAllBook } from "../controllers/book.ts";
import { books } from "../data.ts";
const bookRoutes = new Router()
  .get("/", async (context) => {
    context.response.body = await getAllBook();
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

const bookRouter = { path: "/books", routes: bookRoutes };
export default bookRouter;
