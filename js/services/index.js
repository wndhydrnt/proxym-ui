'use strict';

var proxymApp = require('angular').module('proxymApp');

proxymApp.factory('proxymApi', require('./proxym_api.js'));
proxymApp.factory('proxymConfig', require('./config.js'));
