const http = require('http');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const server = http.createServer();
server.listen(port, () => {
  console.log('The Server Listening Now on',host, 'the Port is',port);
});
