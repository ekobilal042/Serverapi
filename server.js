 
// File: server.js

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware untuk mengurai permintaan berformat URL dan JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mengimpor dan menerapkan router
const router = require('./router');
router(app);

// Handle 404 - Not Found
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 - Internal Server Error');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
