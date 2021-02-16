const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/data-feed', (ctx, next) => {
  // stubbed endpoint
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3001)

console.log('Server running at localhost:3001', )