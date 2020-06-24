// require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');

/**
 * Create Express server.
 */
const app = express();


/**
 * Connect Database.
 */
connectDB();


/**
 * Express configuration.
 */
const PORT = process.env.PORT || 5000;


/**
 * Start Express server.
 */
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
    console.log("Press CTRL-C to stop\n");
});