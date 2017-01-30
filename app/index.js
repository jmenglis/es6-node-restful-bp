'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _logger = require('./lib/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _logger2.default.child({ req_id: './src/app.js' }, true);

var server = _app2.default.listen(4008, function () {
  var port = server.address().port;
  log.info('Server has been started on port', port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGlsZCIsInJlcV9pZCIsInNlcnZlciIsImxpc3RlbiIsInBvcnQiLCJhZGRyZXNzIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxNQUFNLGlCQUFPQyxLQUFQLENBQWEsRUFBQ0MsUUFBUSxjQUFULEVBQWIsRUFBdUMsSUFBdkMsQ0FBVjs7QUFFQSxJQUFJQyxTQUFTLGNBQUlDLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQU07QUFDbEMsTUFBSUMsT0FBT0YsT0FBT0csT0FBUCxHQUFpQkQsSUFBNUI7QUFDQUwsTUFBSU8sSUFBSixDQUFTLGlDQUFULEVBQTRDRixJQUE1QztBQUNELENBSFksQ0FBYiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHAgZnJvbSAnLi9hcHAnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbGliL2xvZ2dlcidcblxubGV0IGxvZyA9IGxvZ2dlci5jaGlsZCh7cmVxX2lkOiAnLi9zcmMvYXBwLmpzJ30sIHRydWUpO1xuXG5sZXQgc2VydmVyID0gYXBwLmxpc3Rlbig0MDA4LCAoKSA9PiB7XG4gIGxldCBwb3J0ID0gc2VydmVyLmFkZHJlc3MoKS5wb3J0O1xuICBsb2cuaW5mbygnU2VydmVyIGhhcyBiZWVuIHN0YXJ0ZWQgb24gcG9ydCcsIHBvcnQpO1xufSk7XG4iXX0=