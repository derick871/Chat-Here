const Username = {name:'name',password:'password'};
localStorage.setItem('Username', JSON.stringify(Username));

const logincontainer=document.getElementById('login-container');
const chatcontainer=document.getElementById('chat-container');
const loginBtn=document.getElementById('login-btn');
const userName=document.getElementById('username');
const password=document.getElementById('password');
const chatLog=document.getElementById('chat-log');
const messageInput=document.getElementById('message');
const sendBtn=document.getElementById('send-btn');

let currentUserId=null;

const username=localStorage.getItem('Username,password');
const parsedUserName=JSON.parse(username,password);
const sessionData = localStorage.getItem('user_session');

if (userName) {
    const user = JSON.parse(userName);
    console.log("User is logged in:", user.name);
} else {
    console.log("No active session found.");
}


loginBtn.addEventListener('click', login);
sendBtn.addEventListener('click', sendMessage);

function login() {
    const userName=userName.value;
    const password=password.value;

    if (Username.name === userName && password === Username.password) {
        alert('Logged in successfully');
    } else {
        alert('Invalid username or password');
    }
}
function sendMessage() {
    const message=messageInput.value;
    if (message.trim() !== '') {
        const chatLog = document.getElementById('chat-log');
        const messageElement = document.createElement('div');
        messageElement.textContent = `${Username.name}: ${message}`;
        chatLog.appendChild(messageElement);
        messageInput.value = '';
        const tick=document.createElement('tick');
        tick.classList.add('tick');
        tick.textContent='tick';
        messageTime.appendChild(tick);
        chatLog.appendChild(messageTime);

        messageInput.value = '';
        chatLog.scrollTop = chatLog.scrollHeight;
    }
}
// receive message
function receiveMessage(message) {
    const messageElement = document.createElement('receiver');
    messageElement.classList.add('message', 'receiver');
    const messageText=document.createElement('receiver');
    messageText.textContent = `Friend: ${message}`;
    messageElement.appendChild(messageText);
   const messageTime=document.createElement('message-time');
    messageTime.classList.add('message-time');
    const time=new Date().toLocaleTimeString();
    messageTime.textContent = time;
    messageElement.appendChild(messageTime);
    const doubleTick=document.createElement('double-tick');
    doubleTick.classList.add('double-tick');
    doubleTick.textContent='double-tick';
    messageTime.appendChild(doubleTick);
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}
//sender double tick
function updateMessageStatus(messageId, status) {
    const messageElement = document.getElementById(messageId);
    if (messageElement) {
        const tick = messageElement.querySelector('.tick');
        const doubleTick = messageElement.querySelector('.double-tick');
        if (status === 'sent') {
        } else if (status === 'delivered') {
        } else if (status === 'read') 
    }   
}     