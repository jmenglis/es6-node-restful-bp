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

app.get('/', function (req, res) {
  res.send('This is the es6 boilerplate api');
});

module.exports = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwibG9nIiwiY2hpbGQiLCJyZXFfaWQiLCJjb25maWciLCJ1c2UiLCJqc29uIiwibGltaXQiLCJ1cmxlbmNvZGVkIiwiZXJyIiwiZGIiLCJlcnJvciIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsTUFBTSx3QkFBVjtBQUNBLElBQUlDLE1BQU0saUJBQU9DLEtBQVAsQ0FBYSxFQUFDQyxRQUFRLGdCQUFULEVBQWIsRUFBeUMsSUFBekMsQ0FBVjtBQUNBLElBQUlDLFNBQVMsdUJBQWI7O0FBRUE7OztBQUdBSixJQUFJSyxHQUFKLENBQVEsNEJBQVI7QUFDQUwsSUFBSUssR0FBSixDQUFRLHFCQUFXQyxJQUFYLENBQWdCO0FBQ3RCQyxTQUFPO0FBRGUsQ0FBaEIsQ0FBUjtBQUdBUCxJQUFJSyxHQUFKLENBQVEscUJBQVdHLFVBQVgsQ0FBc0I7QUFDNUJELFNBQU87QUFEcUIsQ0FBdEIsQ0FBUjs7QUFJQTs7OztBQUlBLHNCQUFhLFVBQUNFLEdBQUQsRUFBTUMsRUFBTixFQUFhO0FBQ3hCLE1BQUlELEdBQUosRUFBUztBQUNQUixRQUFJVSxLQUFKLENBQVVGLEdBQVY7QUFDRDtBQUNEVCxNQUFJSyxHQUFKLENBQVEsTUFBUixFQUFnQixtQkFBSSxFQUFFRCxjQUFGLEVBQVVNLE1BQVYsRUFBSixDQUFoQjtBQUNELENBTEQ7O0FBT0FWLElBQUlZLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDekJBLE1BQUlDLElBQUosQ0FBUyxpQ0FBVDtBQUNELENBRkQ7O0FBSUFDLE9BQU9DLE9BQVAsR0FBaUJqQixHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbGliL2xvZ2dlcidcbmltcG9ydCB7IGdldENvbm5lY3RlZCB9IGZyb20gJy4vbGliL2RiJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZ3MvY29uZmlnJ1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSdcblxubGV0IGFwcCA9IGV4cHJlc3MoKTtcbmxldCBsb2cgPSBsb2dnZXIuY2hpbGQoe3JlcV9pZDogJy4vc3JjL2luZGV4LmpzJ30sIHRydWUpO1xubGV0IGNvbmZpZyA9IENvbmZpZygpO1xuXG4vKipcbiAqIE1pZGRsZXdhcmVzIGFyZSBsb2FkZWQgaGVyZVxuICovXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oe1xuICBsaW1pdDogJzEwbWInXG59KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gIGxpbWl0OiAnMTBtYidcbn0pKTtcblxuLyoqXG4gKiBTZXJ2ZXIgc3RhcnQgcHJvY2VzcyBieSBwYXNzaW5nIERCIGFzIGxvY2FsIHZhcmlhYmxlXG4gKiBBbGxvd3MgZm9yIHBlcnNpc3RlbnQgZGF0YWJhc2UgdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIG9wZW5pbmcgYW5kIGNsb3NpbmcuXG4gKi9cbmdldENvbm5lY3RlZCgoZXJyLCBkYikgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgbG9nLmVycm9yKGVycik7XG4gIH1cbiAgYXBwLnVzZSgnL2FwaScsIGFwaSh7IGNvbmZpZywgZGIgfSkpO1xufSk7XG5cbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoJ1RoaXMgaXMgdGhlIGVzNiBib2lsZXJwbGF0ZSBhcGknKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDtcblxuIl19