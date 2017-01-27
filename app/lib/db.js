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
    try {
      callback(err, db);
    } catch (err) {
      log.error(err);
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZGIuanMiXSwibmFtZXMiOlsibG9nIiwiY2hpbGQiLCJyZXFfaWQiLCJjb25maWciLCJtb25nb1VybCIsImRhdGFiYXNlIiwiZ2V0Q29ubmVjdGVkIiwiY2FsbGJhY2siLCJjb25uZWN0IiwiZXJyIiwiZGIiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsTUFBTSxpQkFBT0MsS0FBUCxDQUFhLEVBQUNDLFFBQVEsaUJBQVQsRUFBYixFQUEwQyxJQUExQyxDQUFWO0FBQ0EsSUFBSUMsU0FBUyx1QkFBYjs7QUFFQSxJQUFJQyxXQUFXRCxPQUFPRSxRQUF0Qjs7QUFFTyxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUN4QyxvQkFBWUMsT0FBWixDQUFvQkosUUFBcEIsRUFBOEIsVUFBVUssR0FBVixFQUFlQyxFQUFmLEVBQW1CO0FBQy9DLFFBQUk7QUFDRkgsZUFBU0UsR0FBVCxFQUFjQyxFQUFkO0FBQ0QsS0FGRCxDQUdBLE9BQU9ELEdBQVAsRUFBWTtBQUNWVCxVQUFJVyxLQUFKLENBQVVGLEdBQVY7QUFDRDtBQUNGLEdBUEQ7QUFRRCxDQVRNIiwiZmlsZSI6ImRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbmdvQ2xpZW50IGZyb20gJ21vbmdvZGInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuLi9jb25maWdzL2NvbmZpZydcblxubGV0IGxvZyA9IGxvZ2dlci5jaGlsZCh7cmVxX2lkOiAnLi9zcmMvbGliL2RiLmpzJ30sIHRydWUpO1xubGV0IGNvbmZpZyA9IENvbmZpZygpO1xuXG5sZXQgbW9uZ29VcmwgPSBjb25maWcuZGF0YWJhc2U7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25uZWN0ZWQgPSAoY2FsbGJhY2spID0+IHtcbiAgTW9uZ29DbGllbnQuY29ubmVjdChtb25nb1VybCwgZnVuY3Rpb24gKGVyciwgZGIpIHtcbiAgICB0cnkge1xuICAgICAgY2FsbGJhY2soZXJyLCBkYik7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZy5lcnJvcihlcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuIl19