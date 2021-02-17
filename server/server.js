const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();
// const BodyParser = require("koa-bodyparser");
const Logger = require("koa-logger");
const cors = require("@koa/cors");
const data = require("../feed/data.json");
const mongoose = require("mongoose");
const Entry = require("./models/Entry");
const HttpStatus = require("http-status");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/fresh-tech";
console.log("Connecting DB to ", MONGODB_URI);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

app.use(Logger());
app.use(cors());

router.post("/seed", async (ctx, next) => {
  console.log("server seed", data.total);

  let res = await Entry.insertMany(data.entries);
  ctx.body = res;
});

router.post("/drop-db", async (ctx, next) => {
  let res = await Entry.deleteMany({});
  ctx.body = res;
});

router.get("/entries", async (ctx, next) => {
  // stubbed endpoint
  console.log("entries api route ", ctx.query.entryType);
  let res = await Entry.find({ programType: ctx.query.entryType }).limit(21);
  ctx.body = res;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);

console.log("Server running at localhost:3001");
