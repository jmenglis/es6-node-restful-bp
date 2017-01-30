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

var server = app.listen(4008, function () {
  var port = server.address().port;
  log.info('Server has been started on port', port);
});

app.get('/', function (req, res) {
  res.send('This is the es6 boilerplate api');
});

module.exports = server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJsb2ciLCJjaGlsZCIsInJlcV9pZCIsImNvbmZpZyIsInVzZSIsImpzb24iLCJsaW1pdCIsInVybGVuY29kZWQiLCJlcnIiLCJkYiIsImVycm9yIiwic2VydmVyIiwibGlzdGVuIiwicG9ydCIsImFkZHJlc3MiLCJpbmZvIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxNQUFNLHdCQUFWO0FBQ0EsSUFBSUMsTUFBTSxpQkFBT0MsS0FBUCxDQUFhLEVBQUNDLFFBQVEsZ0JBQVQsRUFBYixFQUF5QyxJQUF6QyxDQUFWO0FBQ0EsSUFBSUMsU0FBUyx1QkFBYjs7QUFFQTs7O0FBR0FKLElBQUlLLEdBQUosQ0FBUSw0QkFBUjtBQUNBTCxJQUFJSyxHQUFKLENBQVEscUJBQVdDLElBQVgsQ0FBZ0I7QUFDdEJDLFNBQU87QUFEZSxDQUFoQixDQUFSO0FBR0FQLElBQUlLLEdBQUosQ0FBUSxxQkFBV0csVUFBWCxDQUFzQjtBQUM1QkQsU0FBTztBQURxQixDQUF0QixDQUFSOztBQUlBOzs7O0FBSUEsc0JBQWEsVUFBQ0UsR0FBRCxFQUFNQyxFQUFOLEVBQWE7QUFDeEIsTUFBSUQsR0FBSixFQUFTO0FBQ1BSLFFBQUlVLEtBQUosQ0FBVUYsR0FBVjtBQUNEO0FBQ0RULE1BQUlLLEdBQUosQ0FBUSxNQUFSLEVBQWdCLG1CQUFJLEVBQUVELGNBQUYsRUFBVU0sTUFBVixFQUFKLENBQWhCO0FBQ0QsQ0FMRDs7QUFPQSxJQUFJRSxTQUFTWixJQUFJYSxNQUFKLENBQVcsSUFBWCxFQUFpQixZQUFNO0FBQ2xDLE1BQUlDLE9BQU9GLE9BQU9HLE9BQVAsR0FBaUJELElBQTVCO0FBQ0FiLE1BQUllLElBQUosQ0FBUyxpQ0FBVCxFQUE0Q0YsSUFBNUM7QUFDRCxDQUhZLENBQWI7O0FBS0FkLElBQUlpQixHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pCQSxNQUFJQyxJQUFKLENBQVMsaUNBQVQ7QUFDRCxDQUZEOztBQUlBQyxPQUFPQyxPQUFQLEdBQWlCVixNQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbidcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9saWIvbG9nZ2VyJ1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGVkIH0gZnJvbSAnLi9saWIvZGInXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlncy9jb25maWcnXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJ1xuXG5sZXQgYXBwID0gZXhwcmVzcygpO1xubGV0IGxvZyA9IGxvZ2dlci5jaGlsZCh7cmVxX2lkOiAnLi9zcmMvaW5kZXguanMnfSwgdHJ1ZSk7XG5sZXQgY29uZmlnID0gQ29uZmlnKCk7XG5cbi8qKlxuICogTWlkZGxld2FyZXMgYXJlIGxvYWRlZCBoZXJlXG4gKi9cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbih7XG4gIGxpbWl0OiAnMTBtYidcbn0pKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgbGltaXQ6ICcxMG1iJ1xufSkpO1xuXG4vKipcbiAqIFNlcnZlciBzdGFydCBwcm9jZXNzIGJ5IHBhc3NpbmcgREIgYXMgbG9jYWwgdmFyaWFibGVcbiAqIEFsbG93cyBmb3IgcGVyc2lzdGVudCBkYXRhYmFzZSB0byBiZSB1c2VkIGluc3RlYWQgb2Ygb3BlbmluZyBhbmQgY2xvc2luZy5cbiAqL1xuZ2V0Q29ubmVjdGVkKChlcnIsIGRiKSA9PiB7XG4gIGlmIChlcnIpIHtcbiAgICBsb2cuZXJyb3IoZXJyKTtcbiAgfVxuICBhcHAudXNlKCcvYXBpJywgYXBpKHsgY29uZmlnLCBkYiB9KSk7XG59KTtcblxubGV0IHNlcnZlciA9IGFwcC5saXN0ZW4oNDAwOCwgKCkgPT4ge1xuICBsZXQgcG9ydCA9IHNlcnZlci5hZGRyZXNzKCkucG9ydDtcbiAgbG9nLmluZm8oJ1NlcnZlciBoYXMgYmVlbiBzdGFydGVkIG9uIHBvcnQnLCBwb3J0KTtcbn0pO1xuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCdUaGlzIGlzIHRoZSBlczYgYm9pbGVycGxhdGUgYXBpJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJ2ZXI7XG5cbiJdfQ==