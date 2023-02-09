import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import mongoose from "npm:mongoose";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
await config({ export: true });
import bookRouter from "./routes/book.ts";
import indexRouter from "./routes/index.ts";
import userRouter from "./routes/user.ts";
const MONGO_URL = Deno.env.get("MONGO_URL");
if (MONGO_URL) {
  console.log("Connecting db ...");
  const option: any = {
    dbName: "test",
  };
  await mongoose.connect(MONGO_URL, option, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("Connected db successfully.");
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
