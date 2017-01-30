'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _package = require('../../package.json');

var _logger = require('../lib/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _logger2.default.child({ req_id: './src/api/index.js' }, true);

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  api.get('/', function (req, res) {
    res.json({ version: _package.version });
  });

  return api;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsibG9nIiwiY2hpbGQiLCJyZXFfaWQiLCJjb25maWciLCJkYiIsImFwaSIsImdldCIsInJlcSIsInJlcyIsImpzb24iLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsTUFBTSxpQkFBT0MsS0FBUCxDQUFhLEVBQUNDLFFBQVEsb0JBQVQsRUFBYixFQUE2QyxJQUE3QyxDQUFWOztrQkFFZSxnQkFBb0I7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsRUFBUyxRQUFUQSxFQUFTOztBQUNqQyxNQUFJQyxNQUFNLHNCQUFWOztBQUVBQSxNQUFJQyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pCQSxRQUFJQyxJQUFKLENBQVMsRUFBRUMseUJBQUYsRUFBVDtBQUNELEdBRkQ7O0FBSUEsU0FBT0wsR0FBUDtBQUNELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi4vbGliL2xvZ2dlcidcblxubGV0IGxvZyA9IGxvZ2dlci5jaGlsZCh7cmVxX2lkOiAnLi9zcmMvYXBpL2luZGV4LmpzJ30sIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjb25maWcsIGRiIH0pID0+IHtcbiAgbGV0IGFwaSA9IFJvdXRlcigpO1xuXG4gIGFwaS5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuanNvbih7IHZlcnNpb24gfSk7XG4gIH0pO1xuXG4gIHJldHVybiBhcGk7XG59O1xuIl19