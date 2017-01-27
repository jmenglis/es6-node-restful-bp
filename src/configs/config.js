import logger from '../lib/logger'
let log = logger.child({req_id: './src/configs/config.js'}, true);

export default function() {
  try {
    switch (process.env.NODE_ENV) {
      case 'development':
        return require('./local.json');
      case 'production':
        return require('./production.json');
      default:
        throw "Error";
    }
  }
  catch(e) {
    log.error("Issue with loading the database");
  }
}
