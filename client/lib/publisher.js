
var net = require('net');

var host = 'localhost';
var port = 9001;

module.exports = function(user, key) {
  var publisher = function publisher() {
    this.socket = net.connection(port, host);
  };

  publisher.prototype.send = function(topic, message) {
    var data = {
      'topic': topic,
      'message': message
    };

    this.socket.write(JSON.stringify(data), 'utf8');
  };

  return Publisher;
}();