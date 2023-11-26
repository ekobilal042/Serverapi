 // File: koneksi.js

'use strict';

const mysql = require('mysql');

// Konfigurasi koneksi ke database MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Ganti dengan username Anda
    password: '', // Ganti dengan password Anda
    database: 'dbrestapi' // Ganti dengan nama database Anda
});

// Membuka koneksi ke database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;

