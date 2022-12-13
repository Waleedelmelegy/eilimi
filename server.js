const express = require('express')
const next = require('next')
// const nextI18NextMiddleware = require('next-i18next/middleware').default;

// const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()

  // server.use(nextI18NextMiddleware(nextI18next));
  // server.use(routesHandler);

  server.get('*', (req, res) => {
    handle(req, res)
  })

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()

// const { createServer } = require("http");
// const { parse } = require("url");
// const next = require("next");
// const dev = process.env.NODE_ENV !== "production";

// const port = !dev ? process.env.PORT : 3000;

// // Create the Express-Next App
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app
//   .prepare()
//   .then(() => {
//     createServer((req, res) => {
//       const parsedUrl = parse(req.url, true);
//       const { pathname, query } = parsedUrl;
//       handle(req, res, parsedUrl);
//       console.log("pathname", pathname);
//     }).listen(port, (err) => {
//       if (err) throw err;
//       console.log(`> Ready on http://localhost:${port}`);
//     });
//   })
//   .catch((ex) => {
//     console.error(ex.stack);
//     process.exit(1);
//   });
