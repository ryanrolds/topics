
var net = require('net');

var socketPool = []
var topics = {};

var sendToTopicListeners = function(topic, message) {
  if(!topic.listeners || !topic.listeners.length) {
    return 0;
  }

  topic.listeners.forEach(function(v, i, a) {
    console.log(v);
    v.write(message);
  });
};

var server = net.createServer();
server.on('connection', function(conn) {
  socket.setEncoding('utf8');
  socket.setKeepAlive(true);

  socket.on('data', function(data) {
    // Check if subscribe/publish/disconnect

    console.log(data);
  });
  socket.on('timeout', function() {
    console.log('timeout');
  });
});
server.on('error', function(error) {
  console.error(error);
});
server.on('close', function() {
  console.log('close');
});

server.listen(9001);

