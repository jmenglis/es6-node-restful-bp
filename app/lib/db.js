'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnected = undefined;

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _config = require('../configs/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _logger2.default.child({ req_id: './src/lib/db.js' }, true);
var config = (0, _config2.default)();

var mongoUrl = config.database;

var getConnected = exports.getConnected = function getConnected(callback) {
  _mongodb2.default.connect(mongoUrl, function (err, db) {
    if (err) {
      log.error(err);
    }
    callback(err, db);
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZGIuanMiXSwibmFtZXMiOlsibG9nIiwiY2hpbGQiLCJyZXFfaWQiLCJjb25maWciLCJtb25nb1VybCIsImRhdGFiYXNlIiwiZ2V0Q29ubmVjdGVkIiwiY2FsbGJhY2siLCJjb25uZWN0IiwiZXJyIiwiZGIiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsTUFBTSxpQkFBT0MsS0FBUCxDQUFhLEVBQUNDLFFBQVEsaUJBQVQsRUFBYixFQUEwQyxJQUExQyxDQUFWO0FBQ0EsSUFBSUMsU0FBUyx1QkFBYjs7QUFFQSxJQUFJQyxXQUFXRCxPQUFPRSxRQUF0Qjs7QUFFTyxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUN4QyxvQkFBWUMsT0FBWixDQUFvQkosUUFBcEIsRUFBOEIsVUFBVUssR0FBVixFQUFlQyxFQUFmLEVBQW1CO0FBQy9DLFFBQUlELEdBQUosRUFBUztBQUNQVCxVQUFJVyxLQUFKLENBQVVGLEdBQVY7QUFDRDtBQUNERixhQUFTRSxHQUFULEVBQWNDLEVBQWQ7QUFDRCxHQUxEO0FBTUQsQ0FQTSIsImZpbGUiOiJkYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb25nb0NsaWVudCBmcm9tICdtb25nb2RiJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcidcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vY29uZmlncy9jb25maWcnXG5cbmxldCBsb2cgPSBsb2dnZXIuY2hpbGQoe3JlcV9pZDogJy4vc3JjL2xpYi9kYi5qcyd9LCB0cnVlKTtcbmxldCBjb25maWcgPSBDb25maWcoKTtcblxubGV0IG1vbmdvVXJsID0gY29uZmlnLmRhdGFiYXNlO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29ubmVjdGVkID0gKGNhbGxiYWNrKSA9PiB7XG4gIE1vbmdvQ2xpZW50LmNvbm5lY3QobW9uZ29VcmwsIGZ1bmN0aW9uIChlcnIsIGRiKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgbG9nLmVycm9yKGVycik7XG4gICAgfVxuICAgIGNhbGxiYWNrKGVyciwgZGIpO1xuICB9KTtcbn07XG4iXX0=