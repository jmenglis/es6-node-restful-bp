'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  try {
    switch (process.env.NODE_ENV) {
      case 'development':
        return require('./local.json');
      case 'production':
        return require('./production.json');
      default:
        throw "Error";
    }
  } catch (e) {
    log.error("Issue with loading the database");
  }
};

var _logger = require('../lib/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _logger2.default.child({ req_id: './src/configs/config.js' }, true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWdzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJyZXF1aXJlIiwiZSIsImxvZyIsImVycm9yIiwiY2hpbGQiLCJyZXFfaWQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFHZSxZQUFXO0FBQ3hCLE1BQUk7QUFDRixZQUFRQSxRQUFRQyxHQUFSLENBQVlDLFFBQXBCO0FBQ0UsV0FBSyxhQUFMO0FBQ0UsZUFBT0MsUUFBUSxjQUFSLENBQVA7QUFDRixXQUFLLFlBQUw7QUFDRSxlQUFPQSxRQUFRLG1CQUFSLENBQVA7QUFDRjtBQUNFLGNBQU0sT0FBTjtBQU5KO0FBUUQsR0FURCxDQVVBLE9BQU1DLENBQU4sRUFBUztBQUNQQyxRQUFJQyxLQUFKLENBQVUsaUNBQVY7QUFDRDtBQUNGLEM7O0FBakJEOzs7Ozs7QUFDQSxJQUFJRCxNQUFNLGlCQUFPRSxLQUFQLENBQWEsRUFBQ0MsUUFBUSx5QkFBVCxFQUFiLEVBQWtELElBQWxELENBQVYiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZ2dlciBmcm9tICcuLi9saWIvbG9nZ2VyJ1xubGV0IGxvZyA9IGxvZ2dlci5jaGlsZCh7cmVxX2lkOiAnLi9zcmMvY29uZmlncy9jb25maWcuanMnfSwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHN3aXRjaCAocHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgIGNhc2UgJ2RldmVsb3BtZW50JzpcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoJy4vbG9jYWwuanNvbicpO1xuICAgICAgY2FzZSAncHJvZHVjdGlvbic6XG4gICAgICAgIHJldHVybiByZXF1aXJlKCcuL3Byb2R1Y3Rpb24uanNvbicpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgXCJFcnJvclwiO1xuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgbG9nLmVycm9yKFwiSXNzdWUgd2l0aCBsb2FkaW5nIHRoZSBkYXRhYmFzZVwiKTtcbiAgfVxufVxuIl19