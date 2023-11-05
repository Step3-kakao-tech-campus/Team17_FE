// import SockJS from 'sockjs-client';
// import StompJs from '@stomp/stompjs';

// // 클라이언트 객체 생성
// const client = new StompJs.Client({
//   brokerURL:
//     'https://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/chatroom/create',
//   connectHeaders: {},
//   debug: function (str) {
//     console.log(str);
//   },
//   reconnectDelay: 5000,
//   heartbeatIncoming: 4000,
//   heartbeatOutgoing: 4000,
// });

// // 연결 담당 함수
// client.onConnect = function (frame) {
//   // Do something, all subscribes must be done is this callback
//   // This is needed because this will be executed after a (re)connect
// };

// // 에러처리 담당 함수
// client.onStompError = function (frame) {
//   // Will be invoked in case of error encountered at Broker
//   // Bad login/passcode typically will cause an error
//   // Complaint brokers will set `message` header with a brief message. Body may contain details.
//   // Compliant brokers will terminate the connection after any error
//   console.log('Broker reported error: ' + frame.headers['message']);
//   console.log('Additional details: ' + frame.body);
// };

// // 클라이언트 활성화
// client.activate();

// // 메시지 보내기
// client.publish({
//   destination: '/app/chat-send/${room_id}',
//   body: 'Hello world',
//   headers: { priority: '9' },
// });

// const subscription = client.subscribe('/queue/chat-sub/${room_id}', callback);
