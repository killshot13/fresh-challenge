const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();
// const BodyParser = require("koa-bodyparser");
const Logger = require("koa-logger");
const cors = require("@koa/cors");
const entries = require("../feed/data.json");

// app.use(BodyParser());
app.use(Logger());
app.use(cors());

router.get("/test", (ctx, next) => {
  // stubbed endpoint
  console.log("test route");
  ctx.body = entries;
});

router.get("/data-feed", (ctx, next) => {
  // stubbed endpoint
  ctx.body = entries;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);

console.log("Server running at localhost:3001");
