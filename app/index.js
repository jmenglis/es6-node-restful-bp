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

var log = _logger2.default.child({ req_id: './src/index.js' }, true);

var app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({
  limit: '10mb'
}));
app.use(_bodyParser2.default.urlencoded({
  limit: '10mb'
}));

app.get('/', function (req, res) {
  res.sendStatus(200).send('OK');
});

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGlsZCIsInJlcV9pZCIsImFwcCIsInVzZSIsImpzb24iLCJsaW1pdCIsInVybGVuY29kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kU3RhdHVzIiwic2VuZCIsImVyciIsImRiIiwiZXJyb3IiLCJsb2NhbHMiLCJzZXJ2ZXIiLCJsaXN0ZW4iLCJwb3J0IiwiYWRkcmVzcyIsImluZm8iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQUlBLE1BQU0saUJBQU9DLEtBQVAsQ0FBYSxFQUFDQyxRQUFRLGdCQUFULEVBQWIsRUFBeUMsSUFBekMsQ0FBVjs7QUFFQSxJQUFJQyxNQUFNLHdCQUFWOztBQUVBQSxJQUFJQyxHQUFKLENBQVEsNEJBQVI7QUFDQUQsSUFBSUMsR0FBSixDQUFRLHFCQUFXQyxJQUFYLENBQWdCO0FBQ3RCQyxTQUFPO0FBRGUsQ0FBaEIsQ0FBUjtBQUdBSCxJQUFJQyxHQUFKLENBQVEscUJBQVdHLFVBQVgsQ0FBc0I7QUFDNUJELFNBQU87QUFEcUIsQ0FBdEIsQ0FBUjs7QUFJQUgsSUFBSUssR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDOUJBLE1BQUlDLFVBQUosQ0FBZSxHQUFmLEVBQW9CQyxJQUFwQixDQUF5QixJQUF6QjtBQUNELENBRkQ7O0FBSUEsc0JBQWEsVUFBQ0MsR0FBRCxFQUFNQyxFQUFOLEVBQWE7QUFDeEIsTUFBSUQsR0FBSixFQUFTO0FBQ1BiLFFBQUllLEtBQUosQ0FBVUYsR0FBVjtBQUNEO0FBQ0RWLE1BQUlhLE1BQUosQ0FBV0YsRUFBWCxHQUFnQkEsRUFBaEI7QUFDQSxNQUFJRyxTQUFTZCxJQUFJZSxNQUFKLENBQVcsSUFBWCxFQUFpQixZQUFNO0FBQ2xDLFFBQUlDLE9BQU9GLE9BQU9HLE9BQVAsR0FBaUJELElBQTVCO0FBQ0FuQixRQUFJcUIsSUFBSixDQUFTLGlDQUFULEVBQTRDRixJQUE1QztBQUNELEdBSFksQ0FBYjtBQUlELENBVEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbGliL2xvZ2dlcidcbmltcG9ydCB7IGdldENvbm5lY3RlZCB9IGZyb20gJy4vbGliL2RiJ1xuXG5sZXQgbG9nID0gbG9nZ2VyLmNoaWxkKHtyZXFfaWQ6ICcuL3NyYy9pbmRleC5qcyd9LCB0cnVlKTtcblxubGV0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHtcbiAgbGltaXQ6ICcxMG1iJ1xufSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICBsaW1pdDogJzEwbWInXG59KSk7XG5cbmFwcC5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICByZXMuc2VuZFN0YXR1cygyMDApLnNlbmQoJ09LJyk7XG59KTtcblxuZ2V0Q29ubmVjdGVkKChlcnIsIGRiKSA9PiB7XG4gIGlmIChlcnIpIHtcbiAgICBsb2cuZXJyb3IoZXJyKTtcbiAgfVxuICBhcHAubG9jYWxzLmRiID0gZGI7XG4gIGxldCBzZXJ2ZXIgPSBhcHAubGlzdGVuKDQwMDgsICgpID0+IHtcbiAgICBsZXQgcG9ydCA9IHNlcnZlci5hZGRyZXNzKCkucG9ydDtcbiAgICBsb2cuaW5mbygnU2VydmVyIGhhcyBiZWVuIHN0YXJ0ZWQgb24gcG9ydCcsIHBvcnQpO1xuICB9KTtcbn0pO1xuIl19