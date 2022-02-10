import { Readable } from 'stream';
import { render } from '@lit-labs/ssr/lib/render-with-global-dom-shim.js';
import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import serve from 'koa-static';
import { myTemplate } from './my-template.js';

const PORT = process.env.PORT || 3000;

const initialData = {
  listItems: ['bread', 'milk', 'eggs'],
};

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  const ssrResult = render(myTemplate(initialData));
  ctx.response.type = 'html';
  ctx.body = Readable.from(ssrResult);
});

app
  .use(logger())
  .use(serve('.'))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Listening on http://localhost:${PORT}`)
);
