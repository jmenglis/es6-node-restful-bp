import compression from 'compression'
import express from 'express'
import bodyParser from 'body-parser'
import logger from './lib/logger'
import { getConnected } from './lib/db'
let app = express();
let log = logger.child({req_id: './src/index.js'}, true);

/**
 * Middlewares are loaded here
 */
app.use(compression());
app.use(bodyParser.json({
  limit: '10mb'
}));
app.use(bodyParser.urlencoded({
  limit: '10mb'
}));

/**
 * Server start process by passing DB as local variable
 * Allows for persistent database to be used instead of opening and closing.
 */
getConnected((err, db) => {
  if (err) {
    log.error(err);
  }
  app.locals.db = db;
});

let server = app.listen(4008, () => {
  let port = server.address().port;
  log.info('Server has been started on port', port);
});

app.get('/', (req, res) => {
  res.send('OK');
});

module.exports = server;

