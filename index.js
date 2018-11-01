'use strict';

require('dotenv').config();

// Turn us into ES6!!
require('babel-register');

const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(process.env.MONGODB_URI, options);

// This will require our "app.js" file and immediately call its 'start' method, sending the port from our .env
require('./src/app.js').start(process.env.PORT);
