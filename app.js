const express = require('express');
const server = require('http').Server(app);
const createChat = require('./lib/chatServer');

var app = express();

app.use(express.static('public'));

// app.get('/', (req, res, next) => {
//   res.send('index.html');
// });

// chatServer.listen(server);
createChat.listen(server);

app.listen(3000, () => {
  console.log("something something");
});
