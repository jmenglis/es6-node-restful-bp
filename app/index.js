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
  var server = app.listen(4008, function () {
    var port = server.address().port;
    log.info('Server has been started on port', port);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJsb2ciLCJjaGlsZCIsInJlcV9pZCIsInVzZSIsImpzb24iLCJsaW1pdCIsInVybGVuY29kZWQiLCJlcnIiLCJkYiIsImVycm9yIiwibG9jYWxzIiwic2VydmVyIiwibGlzdGVuIiwicG9ydCIsImFkZHJlc3MiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQSxJQUFJQSxNQUFNLHdCQUFWO0FBQ0EsSUFBSUMsTUFBTSxpQkFBT0MsS0FBUCxDQUFhLEVBQUNDLFFBQVEsZ0JBQVQsRUFBYixFQUF5QyxJQUF6QyxDQUFWOztBQUVBOzs7QUFHQUgsSUFBSUksR0FBSixDQUFRLDRCQUFSO0FBQ0FKLElBQUlJLEdBQUosQ0FBUSxxQkFBV0MsSUFBWCxDQUFnQjtBQUN0QkMsU0FBTztBQURlLENBQWhCLENBQVI7QUFHQU4sSUFBSUksR0FBSixDQUFRLHFCQUFXRyxVQUFYLENBQXNCO0FBQzVCRCxTQUFPO0FBRHFCLENBQXRCLENBQVI7O0FBSUE7Ozs7QUFJQSxzQkFBYSxVQUFDRSxHQUFELEVBQU1DLEVBQU4sRUFBYTtBQUN4QixNQUFJRCxHQUFKLEVBQVM7QUFDUFAsUUFBSVMsS0FBSixDQUFVRixHQUFWO0FBQ0Q7QUFDRFIsTUFBSVcsTUFBSixDQUFXRixFQUFYLEdBQWdCQSxFQUFoQjtBQUNBLE1BQUlHLFNBQVNaLElBQUlhLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQU07QUFDbEMsUUFBSUMsT0FBT0YsT0FBT0csT0FBUCxHQUFpQkQsSUFBNUI7QUFDQWIsUUFBSWUsSUFBSixDQUFTLGlDQUFULEVBQTRDRixJQUE1QztBQUNELEdBSFksQ0FBYjtBQUlELENBVEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbGliL2xvZ2dlcidcbmltcG9ydCB7IGdldENvbm5lY3RlZCB9IGZyb20gJy4vbGliL2RiJ1xubGV0IGFwcCA9IGV4cHJlc3MoKTtcbmxldCBsb2cgPSBsb2dnZXIuY2hpbGQoe3JlcV9pZDogJy4vc3JjL2luZGV4LmpzJ30sIHRydWUpO1xuXG4vKipcbiAqIE1pZGRsZXdhcmVzIGFyZSBsb2FkZWQgaGVyZVxuICovXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oe1xuICBsaW1pdDogJzEwbWInXG59KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gIGxpbWl0OiAnMTBtYidcbn0pKTtcblxuLyoqXG4gKiBTZXJ2ZXIgc3RhcnQgcHJvY2VzcyBieSBwYXNzaW5nIERCIGFzIGxvY2FsIHZhcmlhYmxlXG4gKiBBbGxvd3MgZm9yIHBlcnNpc3RlbnQgZGF0YWJhc2UgdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIG9wZW5pbmcgYW5kIGNsb3NpbmcuXG4gKi9cbmdldENvbm5lY3RlZCgoZXJyLCBkYikgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgbG9nLmVycm9yKGVycik7XG4gIH1cbiAgYXBwLmxvY2Fscy5kYiA9IGRiO1xuICBsZXQgc2VydmVyID0gYXBwLmxpc3Rlbig0MDA4LCAoKSA9PiB7XG4gICAgbGV0IHBvcnQgPSBzZXJ2ZXIuYWRkcmVzcygpLnBvcnQ7XG4gICAgbG9nLmluZm8oJ1NlcnZlciBoYXMgYmVlbiBzdGFydGVkIG9uIHBvcnQnLCBwb3J0KTtcbiAgfSk7XG59KTtcbiJdfQ==