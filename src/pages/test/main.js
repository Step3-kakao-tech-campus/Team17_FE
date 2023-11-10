'use strict';

var usernamePage = document.querySelector('#username-page');
var chatPage = document.querySelector('#chat-page');
var usernameForm = document.querySelector('#usernameForm');
var messageForm = document.querySelector('#messageForm');
var messageInput = document.querySelector('#message');
var messageArea = document.querySelector('#messageArea');
var connectingElement = document.querySelector('.connecting');

var stompClient = null;
var username = null;

var colors = [
  '#2196F3',
  '#32c787',
  '#00BCD4',
  '#ff5652',
  '#ffc107',
  '#ff85af',
  '#FF9800',
  '#39bbb0',
];

function connect(event) {
  username = document.querySelector('#name').value.trim();

  if (username) {
    usernamePage.classList.add('hidden');
    chatPage.classList.remove('hidden');

    var socket = new SockJS(
      'http://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/connect',
    );
    stompClient = Stomp.over(socket);

    stompClient.connect({}, onConnected, onError);
  }
  event.preventDefault();
}

function onConnected() {
  // Subscribe to the Public Topic
  stompClient.subscribe('api/topic/chat-sub/1', onMessageReceived);

  connectingElement.classList.add('hidden');
}

function onError(error) {
  connectingElement.textContent =
    '웹소켓에 연결되지 않았습니다, 다시 시도해주세요.';
  connectingElement.style.color = 'red';
}

function sendMessage(event) {
  var messageContent = messageInput.value.trim();
  if (messageContent && stompClient) {
    var chatMessage = {
      chatContent: messageInput.value,
      memberId: username,
      messageType: 'CHAT',
    };
    stompClient.send('/api/app/1', {}, JSON.stringify(chatMessage));
    messageInput.value = '';
  }
  event.preventDefault();
}

function onMessageReceived(payload) {
  var message = JSON.parse(payload.body);

  var messageElement = document.createElement('li');

  if (message.messageType === 'JOIN') {
    // 미작성
  } else if (message.messageType === 'LEAVE') {
    // 미작성
  } else if (message.messageType === 'IMAGE') {
    // 미작성
  } else {
    messageElement.classList.add('chat-message');

    var avatarElement = document.createElement('i');
    var avatarText = document.createTextNode('사용자' + message.userId);
    avatarElement.appendChild(avatarText);
    avatarElement.style['background-color'] = getAvatarColor(
      '사용자' + message.userId,
    );

    messageElement.appendChild(avatarElement);

    var usernameElement = document.createElement('span');
    var usernameText = document.createTextNode('사용자' + message.userId);
    usernameElement.appendChild(usernameText);
    messageElement.appendChild(usernameElement);
  }

  var textElement = document.createElement('p');
  var messageText = document.createTextNode(message.chatContent);
  textElement.appendChild(messageText);

  messageElement.appendChild(textElement);

  messageArea.appendChild(messageElement);
  messageArea.scrollTop = messageArea.scrollHeight;
}

function getAvatarColor(messageSender) {
  var hash = 0;
  for (var i = 0; i < messageSender.length; i++) {
    hash = 31 * hash + messageSender.charCodeAt(i);
  }
  var index = Math.abs(hash % colors.length);
  return colors[index];
}

usernameForm.addEventListener('submit', connect, true);
messageForm.addEventListener('submit', sendMessage, true);
