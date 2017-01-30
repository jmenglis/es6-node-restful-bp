import { Router } from 'express'
import { version } from '../../package.json'
import logger from '../lib/logger'

let log = logger.child({req_id: './src/api/index.js'}, true);

export default ({ config, db }) => {
  let api = Router();

  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
};
