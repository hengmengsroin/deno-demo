import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import mongoose from "npm:mongoose@^6.7";
import Dinosaur from "./models/Dinosaur.ts";
import bookRouter from "./routes/book.ts";
import indexRouter from "./routes/index.ts";
import userRouter from "./routes/user.ts";
const MONGO_URL = Deno.env.get("MONGO_URL");
if (MONGO_URL) {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
} else {
  console.log("NO MONGO URL TO CONNECT", MONGO_URL);
}

const router = new Router();
const app = new Application();
app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// routes
router.all(indexRouter.path, indexRouter.routes);
router.all(userRouter.path, userRouter.routes);
router.all(bookRouter.path, bookRouter.routes);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
