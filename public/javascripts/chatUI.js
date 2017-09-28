const Chat = require('./chat');

class ChatUI {
  constructor(socket){
    this.socket = socket;
    this.chat = new Chat(socket);
    this.form = document.querySelector('form');
    this.input = document.querySelector('input');
    this.msgList = document.querySelector('msg-list');
  }

  getInput(){
    return this.input.value;
  }

  emitMessage(){
    this.chat.sendMessage(this.getInput());
  }

  addMessages(msg){
    const newMessage = document.createElement('li');
    newMessage.textContent = msg;
    this.msgList.appendChild(newMessage);
  }

  submit() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      let msg = this.getInput();
      console.log(msg);
      this.addMessages(msg);
      this.input.value = '';
    });
  }


}

module.exports = ChatUI;
