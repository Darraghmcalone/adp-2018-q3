const net = require('net');
const server = net.createServer();

server.on('connection', handleConnection);
server.listen(9000, function() {
  console.log('server listening to %j', server.address());
});

function handleConnection(conn) {
    const remoteAddress = `${conn.remoteAddress}:${conn.remotePort}`;
    console.log(`new client connection from ${remoteAddress}`);
  }
  