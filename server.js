// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


// Get our API routes
const api = require('./server/routes/api');

const axios = require('axios');

const app = express();


  





















// const getMessages = async () => {
//   try {
//     return await axios.get(`https://www.googleapis.com/gmail/v1/users/me/messages`)
//   } catch (error) {
//     console.error(error)
//   }
// }

// const printMessages = async () => {
//   const messages = await getMessages();

//   if (messages) {
//     console.log(messages);
//   }
// }

// printMessages();



















// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/tracking-packages')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/tracking-packages/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));