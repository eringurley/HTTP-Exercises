const { createServer } = require('http');
// const { parse } = require('url');

const app = createServer((req, res) => {
  // const url = parse('req.url');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dogs</title>
    <h1>Dogs Yo</h1>
    <style>
    li {
      color: blue;
    }
    </style>
  </head>
  <body>
      <ol>
        <li>Spot</li>
        <li>Rover</li>
        <li>Dog</li>
      </ol>
      <script>
      console.log('i am a script');
    </script>
  </body>
  </html>`;
  res.end(html);
});

module.exports = app; 
