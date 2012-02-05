
var client = require('../');

describe('publisher', function() {
  var publisher = new client.Publisher();

  it('can set credentials', function() {
    publisher.credentials(user, key);
  });

  it('can send message to topic', function() {
    publisher.message('topic', {'foo':'bar'});
  });

  it('can listen to topic', function() {
    publisher.listen('topic', function() {
      done();
    });
  });

  

  it('can disconnect', function() {
    publisher.close();
  });
});