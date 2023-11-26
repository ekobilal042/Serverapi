// File: controller.js

'use strict';

const response = require('./res');
const connection = require('./koneksi');

module.exports = {
    getAllData: function(req, res) {
        try {
            connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
                if (error) {
                    console.error('Error querying database:', error);
                    response.ok('Error querying database', res);
                } else {
                    if (rows && rows.length > 0) {
                        response.ok(rows, res);
                    } else {
                        console.log('No data found in the database.');
                        response.ok('No data found', res);
                    }
                }
            });
        } catch (error) {
            console.error('Error in getAllData:', error);
            response.ok('Error in getAllData', res);
        }
    }
    // Anda dapat menambahkan fungsi kontroler lainnya di sini
};
