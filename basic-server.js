const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200); // status code HTTP 200 / OK

  const dataObj = { id: 123, name: 'Bob', email: 'bob@work.org' };
  const data = JSON.stringify(dataObj);

  res.end(data);
});

server.listen(1234, () => {
  console.log('Listening on port 1234');
});
