import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import bookRouter from "./books.ts";
import userRouter from "./users.ts";

const router = new Router();
router.all(userRouter.path, userRouter.routes);
router.all(bookRouter.path, bookRouter.routes);
export default router;
