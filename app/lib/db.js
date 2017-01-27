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

var config = (0, _config2.default)();

var log = _logger2.default.child({ req_id: './src/lib/db.js' }, true);

var mongoUrl = config.database;
console.log(config.database);
var getConnected = exports.getConnected = function getConnected(callback) {
  _mongodb2.default.connect(mongoUrl, function (err, db) {
    if (err) {
      log.error(err);
    }
    callback(err, db);
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZGIuanMiXSwibmFtZXMiOlsiY29uZmlnIiwibG9nIiwiY2hpbGQiLCJyZXFfaWQiLCJtb25nb1VybCIsImRhdGFiYXNlIiwiY29uc29sZSIsImdldENvbm5lY3RlZCIsImNhbGxiYWNrIiwiY29ubmVjdCIsImVyciIsImRiIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQUlBLFNBQVMsdUJBQWI7O0FBR0EsSUFBSUMsTUFBTSxpQkFBT0MsS0FBUCxDQUFhLEVBQUNDLFFBQVEsaUJBQVQsRUFBYixFQUEwQyxJQUExQyxDQUFWOztBQUVBLElBQUlDLFdBQVdKLE9BQU9LLFFBQXRCO0FBQ0FDLFFBQVFMLEdBQVIsQ0FBWUQsT0FBT0ssUUFBbkI7QUFDTyxJQUFNRSxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUN4QyxvQkFBWUMsT0FBWixDQUFvQkwsUUFBcEIsRUFBOEIsVUFBVU0sR0FBVixFQUFlQyxFQUFmLEVBQW1CO0FBQy9DLFFBQUlELEdBQUosRUFBUztBQUNQVCxVQUFJVyxLQUFKLENBQVVGLEdBQVY7QUFDRDtBQUNERixhQUFTRSxHQUFULEVBQWNDLEVBQWQ7QUFDRCxHQUxEO0FBTUQsQ0FQTSIsImZpbGUiOiJkYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb25nb0NsaWVudCBmcm9tICdtb25nb2RiJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcidcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vY29uZmlncy9jb25maWcnXG5sZXQgY29uZmlnID0gQ29uZmlnKCk7XG5cblxubGV0IGxvZyA9IGxvZ2dlci5jaGlsZCh7cmVxX2lkOiAnLi9zcmMvbGliL2RiLmpzJ30sIHRydWUpO1xuXG5sZXQgbW9uZ29VcmwgPSBjb25maWcuZGF0YWJhc2U7XG5jb25zb2xlLmxvZyhjb25maWcuZGF0YWJhc2UpO1xuZXhwb3J0IGNvbnN0IGdldENvbm5lY3RlZCA9IChjYWxsYmFjaykgPT4ge1xuICBNb25nb0NsaWVudC5jb25uZWN0KG1vbmdvVXJsLCBmdW5jdGlvbiAoZXJyLCBkYikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGxvZy5lcnJvcihlcnIpO1xuICAgIH1cbiAgICBjYWxsYmFjayhlcnIsIGRiKTtcbiAgfSk7XG59O1xuIl19