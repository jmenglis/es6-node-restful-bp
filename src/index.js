import app from './app'
import logger from './lib/logger'

let log = logger.child({req_id: './src/app.js'}, true);

let server = app.listen(4008, () => {
  let port = server.address().port;
  log.info('Server has been started on port', port);
});
