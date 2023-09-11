'use strict';

// Server URL below must point to your server, localhost works for local development/testing
const socket = io('http://localhost:3000');

const nicknameInput = document.getElementById('nickname');
const roomSelect = document.getElementById('room');
const messageInput = document.getElementById('m');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const nickname = nicknameInput.value;
  const room = roomSelect.value; // Get the selected room
  const message = messageInput.value;

  if (nickname && room && message) {
    // Emit a chat message with nickname, room, and message
    socket.emit('chat message', { nickname, room, message });
    messageInput.value = '';
  } else {
    // Handle empty fields or validation here
    console.log('Please fill in all fields.');
  }
});

socket.on('chat message', (msgObj) => {
  const { nickname, room, message } = msgObj;
  if (room === roomSelect.value) {
    // Only display messages for the selected room
    const item = document.createElement('li');
    item.innerHTML = `<strong>${nickname}:</strong> ${message}`;
    document.getElementById('messages').appendChild(item);
  }
});
