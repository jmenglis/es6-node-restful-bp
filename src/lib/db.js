import MongoClient from 'mongodb'
import logger from './logger'
import Config from '../configs/config'

let log = logger.child({req_id: './src/lib/db.js'}, true);
let config = Config();

let mongoUrl = config.database;

export const getConnected = (callback) => {
  MongoClient.connect(mongoUrl, function (err, db) {
    if (err) {
      log.error(err);
    }
    callback(err, db);
  });
};
