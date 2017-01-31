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
  extended: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwibG9nIiwiY2hpbGQiLCJyZXFfaWQiLCJjb25maWciLCJ1c2UiLCJqc29uIiwibGltaXQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJlcnIiLCJkYiIsImVycm9yIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLE1BQU0sd0JBQVY7QUFDQSxJQUFJQyxNQUFNLGlCQUFPQyxLQUFQLENBQWEsRUFBQ0MsUUFBUSxnQkFBVCxFQUFiLEVBQXlDLElBQXpDLENBQVY7QUFDQSxJQUFJQyxTQUFTLHVCQUFiOztBQUVBOzs7QUFHQUosSUFBSUssR0FBSixDQUFRLHFCQUFSO0FBQ0FMLElBQUlLLEdBQUosQ0FBUSw0QkFBUjtBQUNBTCxJQUFJSyxHQUFKLENBQVEscUJBQVdDLElBQVgsQ0FBZ0I7QUFDdEJDLFNBQU87QUFEZSxDQUFoQixDQUFSO0FBR0FQLElBQUlLLEdBQUosQ0FBUSxxQkFBV0csVUFBWCxDQUFzQjtBQUM1QkMsWUFBVSxJQURrQjtBQUU1QkYsU0FBTztBQUZxQixDQUF0QixDQUFSOztBQUtBOzs7O0FBSUEsc0JBQWEsVUFBQ0csR0FBRCxFQUFNQyxFQUFOLEVBQWE7QUFDeEIsTUFBSUQsR0FBSixFQUFTO0FBQ1BULFFBQUlXLEtBQUosQ0FBVUYsR0FBVjtBQUNEO0FBQ0RWLE1BQUlLLEdBQUosQ0FBUSxNQUFSLEVBQWdCLG1CQUFJLEVBQUVELGNBQUYsRUFBVU8sTUFBVixFQUFKLENBQWhCO0FBQ0QsQ0FMRDs7QUFPQVgsSUFBSWEsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN6QkEsTUFBSUMsSUFBSixDQUFTLGlDQUFUO0FBQ0QsQ0FGRDs7QUFJQUMsT0FBT0MsT0FBUCxHQUFpQmxCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbidcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9saWIvbG9nZ2VyJ1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCB7IGdldENvbm5lY3RlZCB9IGZyb20gJy4vbGliL2RiJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZ3MvY29uZmlnJ1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSdcblxubGV0IGFwcCA9IGV4cHJlc3MoKTtcbmxldCBsb2cgPSBsb2dnZXIuY2hpbGQoe3JlcV9pZDogJy4vc3JjL2luZGV4LmpzJ30sIHRydWUpO1xubGV0IGNvbmZpZyA9IENvbmZpZygpO1xuXG4vKipcbiAqIE1pZGRsZXdhcmVzIGFyZSBsb2FkZWQgaGVyZVxuICovXG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oe1xuICBsaW1pdDogJzEwbWInXG59KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gIGV4dGVuZGVkOiB0cnVlLFxuICBsaW1pdDogJzEwbWInXG59KSk7XG5cbi8qKlxuICogU2VydmVyIHN0YXJ0IHByb2Nlc3MgYnkgcGFzc2luZyBEQiBhcyBsb2NhbCB2YXJpYWJsZVxuICogQWxsb3dzIGZvciBwZXJzaXN0ZW50IGRhdGFiYXNlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiBvcGVuaW5nIGFuZCBjbG9zaW5nLlxuICovXG5nZXRDb25uZWN0ZWQoKGVyciwgZGIpID0+IHtcbiAgaWYgKGVycikge1xuICAgIGxvZy5lcnJvcihlcnIpO1xuICB9XG4gIGFwcC51c2UoJy9hcGknLCBhcGkoeyBjb25maWcsIGRiIH0pKTtcbn0pO1xuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCdUaGlzIGlzIHRoZSBlczYgYm9pbGVycGxhdGUgYXBpJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7XG5cbiJdfQ==