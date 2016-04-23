const Hapi = require('hapi');

//Create a server with a host and port
const server = new Hapi.Server();
server.connection( {
  port: 3000
});

//Start server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});