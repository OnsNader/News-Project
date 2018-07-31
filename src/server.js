const http = require('http');
const router = require('./route_1');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const server = http.createServer(router);
server.listen(port, () => {
  console.log('The Server Listening Now on', host, 'the Port is', port);
});
