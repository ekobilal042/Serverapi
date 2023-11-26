 // File: controller.js

'use strict';

const response = require('./res');
const connection = require('./koneksi');

module.exports = {
    getAllData: function (req, res) {
        connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
            if (error) {
                console.error('Error querying database:', error);
                response.ok('Error querying database', res);
            } else {
                response.ok(rows, res);
            }
        });
    }
    // Anda dapat menambahkan fungsi kontroler lainnya di sini
};

