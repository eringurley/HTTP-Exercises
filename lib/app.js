const { createServer } = require('http');
const { parse } = require('url');

const app = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/html');
  if(pathname === '/') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <h1>Welcome</h1>
      <ul>
        <li><a href="/red">red</a></li>
        <li><a href="/green">green</a></li>
        <li><a href="/blue">blue</a></li>
      </ul>
    </body>
    </html>`);
  } else if(pathname === '/red') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
        h1 {
          color: red;
        }
      </style>
    </head>
    <body>
      <h1>red</h1>
    </body>
    </html>`);
  } else if(pathname === '/green') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
        h1 {
          color: green;
        }
      </style>
    </head>
    <body>
      <h1>green</h1>
    </body>
    </html>`);
  } else if(pathname === '/blue') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
        h1 {
          color: blue;
        }
      </style>
    </head>
    <body>
      <h1>blue</h1>
    </body>
    </html>`);
  } else {
    res.statusCode = 404;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <h1>Not Found</h1>
    </body>
    </html>`);
  }
});

module.exports = app;
