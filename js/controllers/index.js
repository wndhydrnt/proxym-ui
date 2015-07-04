'use strict';

var proxymApp = require('angular').module('proxymApp');

proxymApp.controller('AnnotationCreateCtrl', require('./annotations/create.js'));
proxymApp.controller('AnnotationEditCtrl', require('./annotations/edit.js'));
proxymApp.controller('AnnotationListCtrl', require('./annotations/list.js'));
