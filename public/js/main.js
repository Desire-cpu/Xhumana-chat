const chatForm = document.getElementById('chat-form');
const socket = io();

//message server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);
});

// message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //getting message text
    const msg = e.target.elements.msg.value;

    //emit a message to server
    socket.emit('chatMessage', msg);
})

//output message to DOM

function outputMessage(message) {
    const div = document.createElement('div');
}
