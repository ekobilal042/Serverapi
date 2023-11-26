 // File: router.js

'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/api/data').get(controller.getAllData);
    // Anda dapat menambahkan rute lainnya di sini
};

