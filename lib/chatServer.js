var io = require('socket.io');


const createChat =  {
  // let guestNum = 1;
  listen(server){
    const chat = io(server);
    // chat.on('connection', function (socket) {
    //   // socket.emit('message', {
    //   //   text: "this is text"
    //   // });
    //   console.log('connected');
    // });
  }
};

module.exports = createChat;
