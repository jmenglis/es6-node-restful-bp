'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _logger = require('./lib/logger');

var _logger2 = _interopRequireDefault(_logger);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _db = require('./lib/db');

var _config = require('./configs/config');

var _config2 = _interopRequireDefault(_config);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var log = _logger2.default.child({ req_id: './src/index.js' }, true);
var config = (0, _config2.default)();

/**
 * Middlewares are loaded here
 */
app.use((0, _cors2.default)());
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
  app.use('/api', (0, _api2.default)({ config: config, db: db }));
});

app.get('/', function (req, res) {
  res.send('This is the es6 boilerplate api');
});

module.exports = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwibG9nIiwiY2hpbGQiLCJyZXFfaWQiLCJjb25maWciLCJ1c2UiLCJqc29uIiwibGltaXQiLCJ1cmxlbmNvZGVkIiwiZXJyIiwiZGIiLCJlcnJvciIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxNQUFNLHdCQUFWO0FBQ0EsSUFBSUMsTUFBTSxpQkFBT0MsS0FBUCxDQUFhLEVBQUNDLFFBQVEsZ0JBQVQsRUFBYixFQUF5QyxJQUF6QyxDQUFWO0FBQ0EsSUFBSUMsU0FBUyx1QkFBYjs7QUFFQTs7O0FBR0FKLElBQUlLLEdBQUosQ0FBUSxxQkFBUjtBQUNBTCxJQUFJSyxHQUFKLENBQVEsNEJBQVI7QUFDQUwsSUFBSUssR0FBSixDQUFRLHFCQUFXQyxJQUFYLENBQWdCO0FBQ3RCQyxTQUFPO0FBRGUsQ0FBaEIsQ0FBUjtBQUdBUCxJQUFJSyxHQUFKLENBQVEscUJBQVdHLFVBQVgsQ0FBc0I7QUFDNUJELFNBQU87QUFEcUIsQ0FBdEIsQ0FBUjs7QUFJQTs7OztBQUlBLHNCQUFhLFVBQUNFLEdBQUQsRUFBTUMsRUFBTixFQUFhO0FBQ3hCLE1BQUlELEdBQUosRUFBUztBQUNQUixRQUFJVSxLQUFKLENBQVVGLEdBQVY7QUFDRDtBQUNEVCxNQUFJSyxHQUFKLENBQVEsTUFBUixFQUFnQixtQkFBSSxFQUFFRCxjQUFGLEVBQVVNLE1BQVYsRUFBSixDQUFoQjtBQUNELENBTEQ7O0FBT0FWLElBQUlZLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDekJBLE1BQUlDLElBQUosQ0FBUyxpQ0FBVDtBQUNELENBRkQ7O0FBSUFDLE9BQU9DLE9BQVAsR0FBaUJqQixHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbGliL2xvZ2dlcidcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgeyBnZXRDb25uZWN0ZWQgfSBmcm9tICcuL2xpYi9kYidcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWdzL2NvbmZpZydcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknXG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG5sZXQgbG9nID0gbG9nZ2VyLmNoaWxkKHtyZXFfaWQ6ICcuL3NyYy9pbmRleC5qcyd9LCB0cnVlKTtcbmxldCBjb25maWcgPSBDb25maWcoKTtcblxuLyoqXG4gKiBNaWRkbGV3YXJlcyBhcmUgbG9hZGVkIGhlcmVcbiAqL1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHtcbiAgbGltaXQ6ICcxMG1iJ1xufSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICBsaW1pdDogJzEwbWInXG59KSk7XG5cbi8qKlxuICogU2VydmVyIHN0YXJ0IHByb2Nlc3MgYnkgcGFzc2luZyBEQiBhcyBsb2NhbCB2YXJpYWJsZVxuICogQWxsb3dzIGZvciBwZXJzaXN0ZW50IGRhdGFiYXNlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiBvcGVuaW5nIGFuZCBjbG9zaW5nLlxuICovXG5nZXRDb25uZWN0ZWQoKGVyciwgZGIpID0+IHtcbiAgaWYgKGVycikge1xuICAgIGxvZy5lcnJvcihlcnIpO1xuICB9XG4gIGFwcC51c2UoJy9hcGknLCBhcGkoeyBjb25maWcsIGRiIH0pKTtcbn0pO1xuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCdUaGlzIGlzIHRoZSBlczYgYm9pbGVycGxhdGUgYXBpJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7XG5cbiJdfQ==