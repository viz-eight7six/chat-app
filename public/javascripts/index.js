document.addEventListener('DOMContentLoaded', () => {
  const socket = require('socket.io-client')();
  const ChatUI = require('./chatUI');
  let myChat = new ChatUI(socket);

  socket.on('message', (message) => {
    myChat.addMessages(message.text);
  });

});
