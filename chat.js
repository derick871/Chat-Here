const Username = {
    1: 'Derick',
    2: 'John',
    3: 'Joseph',
    4: 'Sharon',
    5: 'Esther',
}
const logincontainer=document.getElementById('login-container');
const chatcontainer=document.getElementById('chat-container');
const loginBtn=document.getElementById('login-btn');
const userName=document.getElementById('username');
const password=document.getElementById('password');
const chatLog=document.getElementById('chat-log');
const messageInput=document.getElementById('message-input');
const sendBtn=document.getElementById('send-btn');

let currentUserId=null;

loginBtn.addEventListener('click', login);
sendBtn.addEventListener('click', sendMessage);

function login() {
    const userName=userName.value;
    const password=password.value;

    if (Username[currentUserId] === userName && password === 'password') {
        alert('Logged in successfully');
    } else {
        alert('Invalid username or password');
    }
}
cno