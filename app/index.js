'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _logger = require('./lib/logger');

var _logger2 = _interopRequireDefault(_logger);

var _db = require('./lib/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var log = _logger2.default.child({ req_id: './src/index.js' }, true);

/**
 * Middlewares are loaded here
 */
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({
  limit: '10mb'
}));
app.use(_bodyParser2.default.urlencoded({
  limit: '10mb'
}));

/**
 * Server start process by passing DB as local variable
 * Allows for persistent database to be used instead of opening and closing.
 */
(0, _db.getConnected)(function (err, db) {
  if (err) {
    log.error(err);
  }
  app.locals.db = db;
});

var server = app.listen(4008, function () {
  var port = server.address().port;
  log.info('Server has been started on port', port);
});

app.get('/', function (req, res) {
  res.send('OK');
});

module.exports = server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJsb2ciLCJjaGlsZCIsInJlcV9pZCIsInVzZSIsImpzb24iLCJsaW1pdCIsInVybGVuY29kZWQiLCJlcnIiLCJkYiIsImVycm9yIiwibG9jYWxzIiwic2VydmVyIiwibGlzdGVuIiwicG9ydCIsImFkZHJlc3MiLCJpbmZvIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBLElBQUlBLE1BQU0sd0JBQVY7QUFDQSxJQUFJQyxNQUFNLGlCQUFPQyxLQUFQLENBQWEsRUFBQ0MsUUFBUSxnQkFBVCxFQUFiLEVBQXlDLElBQXpDLENBQVY7O0FBRUE7OztBQUdBSCxJQUFJSSxHQUFKLENBQVEsNEJBQVI7QUFDQUosSUFBSUksR0FBSixDQUFRLHFCQUFXQyxJQUFYLENBQWdCO0FBQ3RCQyxTQUFPO0FBRGUsQ0FBaEIsQ0FBUjtBQUdBTixJQUFJSSxHQUFKLENBQVEscUJBQVdHLFVBQVgsQ0FBc0I7QUFDNUJELFNBQU87QUFEcUIsQ0FBdEIsQ0FBUjs7QUFJQTs7OztBQUlBLHNCQUFhLFVBQUNFLEdBQUQsRUFBTUMsRUFBTixFQUFhO0FBQ3hCLE1BQUlELEdBQUosRUFBUztBQUNQUCxRQUFJUyxLQUFKLENBQVVGLEdBQVY7QUFDRDtBQUNEUixNQUFJVyxNQUFKLENBQVdGLEVBQVgsR0FBZ0JBLEVBQWhCO0FBQ0QsQ0FMRDs7QUFPQSxJQUFJRyxTQUFTWixJQUFJYSxNQUFKLENBQVcsSUFBWCxFQUFpQixZQUFNO0FBQ2xDLE1BQUlDLE9BQU9GLE9BQU9HLE9BQVAsR0FBaUJELElBQTVCO0FBQ0FiLE1BQUllLElBQUosQ0FBUyxpQ0FBVCxFQUE0Q0YsSUFBNUM7QUFDRCxDQUhZLENBQWI7O0FBS0FkLElBQUlpQixHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pCQSxNQUFJQyxJQUFKLENBQVMsSUFBVDtBQUNELENBRkQ7O0FBSUFDLE9BQU9DLE9BQVAsR0FBaUJWLE1BQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJ1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xpYi9sb2dnZXInXG5pbXBvcnQgeyBnZXRDb25uZWN0ZWQgfSBmcm9tICcuL2xpYi9kYidcbmxldCBhcHAgPSBleHByZXNzKCk7XG5sZXQgbG9nID0gbG9nZ2VyLmNoaWxkKHtyZXFfaWQ6ICcuL3NyYy9pbmRleC5qcyd9LCB0cnVlKTtcblxuLyoqXG4gKiBNaWRkbGV3YXJlcyBhcmUgbG9hZGVkIGhlcmVcbiAqL1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHtcbiAgbGltaXQ6ICcxMG1iJ1xufSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICBsaW1pdDogJzEwbWInXG59KSk7XG5cbi8qKlxuICogU2VydmVyIHN0YXJ0IHByb2Nlc3MgYnkgcGFzc2luZyBEQiBhcyBsb2NhbCB2YXJpYWJsZVxuICogQWxsb3dzIGZvciBwZXJzaXN0ZW50IGRhdGFiYXNlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiBvcGVuaW5nIGFuZCBjbG9zaW5nLlxuICovXG5nZXRDb25uZWN0ZWQoKGVyciwgZGIpID0+IHtcbiAgaWYgKGVycikge1xuICAgIGxvZy5lcnJvcihlcnIpO1xuICB9XG4gIGFwcC5sb2NhbHMuZGIgPSBkYjtcbn0pO1xuXG5sZXQgc2VydmVyID0gYXBwLmxpc3Rlbig0MDA4LCAoKSA9PiB7XG4gIGxldCBwb3J0ID0gc2VydmVyLmFkZHJlc3MoKS5wb3J0O1xuICBsb2cuaW5mbygnU2VydmVyIGhhcyBiZWVuIHN0YXJ0ZWQgb24gcG9ydCcsIHBvcnQpO1xufSk7XG5cbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoJ09LJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJ2ZXI7XG5cbiJdfQ==