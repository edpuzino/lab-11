'use strict';

import memoryStorage from './memory.js';
import fileStorage from './filesystem.js';
import mongoStorage from '../../../../../data/db/    ';

let dataStorageModule = {};

switch( process.env.STORAGE ) {
  case 'filesystem':
    dataStorageModule = fileStorage;
    break;
  default:
    dataStorageModule = memoryStorage;
    break;
}

export default dataStorageModule;
