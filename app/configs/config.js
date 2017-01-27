'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  switch (process.env.NODE_ENV) {
    case 'development':
      return require('./local.json');
    case 'production':
      return require('./production.json');
    default:
      return "Error";
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWdzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsWUFBVztBQUN4QixVQUFPQSxRQUFRQyxHQUFSLENBQVlDLFFBQW5CO0FBQ0UsU0FBSyxhQUFMO0FBQ0UsYUFBT0MsUUFBUSxjQUFSLENBQVA7QUFDRixTQUFLLFlBQUw7QUFDRSxhQUFPQSxRQUFRLG1CQUFSLENBQVA7QUFDRjtBQUNFLGFBQU8sT0FBUDtBQU5KO0FBUUQsQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgc3dpdGNoKHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgY2FzZSAnZGV2ZWxvcG1lbnQnOlxuICAgICAgcmV0dXJuIHJlcXVpcmUoJy4vbG9jYWwuanNvbicpO1xuICAgIGNhc2UgJ3Byb2R1Y3Rpb24nOlxuICAgICAgcmV0dXJuIHJlcXVpcmUoJy4vcHJvZHVjdGlvbi5qc29uJyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIkVycm9yXCI7XG4gIH1cbn1cbiJdfQ==