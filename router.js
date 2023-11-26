// File: router.js

'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/api/data').get((req, res) => {
        console.log('Accessing /api/data');
        controller.getAllData(req, res);
    });
    // Anda dapat menambahkan rute lainnya di sini
};
