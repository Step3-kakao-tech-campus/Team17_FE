import { useEffect, useState } from 'react';
import * as S from '../../styles/templates/ChatListTemplate';
import { TelegramLogo } from '@phosphor-icons/react';
import * as T from '../../styles/molecules/BottomChatBar';
import SockJS from 'sockjs-client/dist/sockjs';
import ChatContentList from '../organisms/ChatContentList';
import { Box, Card, CardContent, Typography } from '@mui/material';

// import { WebSocket } from 'ws';
// Object.assign(global, { WebSocket });
// [채팅] - 메시지 전송 API Request 값들
interface ChatRequest {
  memberId: number;
  chatContent: string;
  messageType: string;
}

// Props로 전달받는게 맞는가? useLocation써서 State값을 여기서 받나..?
interface IdRequest {
  chatRoomId: number;
  memberId: number;
  // chatContent: string;
}

type ChatRoomTemplate2Props = {
  chat: IdRequest;
};

var socket = new SockJS(
  'http://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/connect',
);

//create stomp client (stomp 클라이언트 생성)
const client = Stomp.over(socket);
client.brokerURL =
  'ws://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/connect';
console.log('1. stomp 클라이언트 생성 완료');

//stomp connect (stomp 연결 api), roomid를 가져와야할듯..?

const ChatRoomTemplate2 = ({ chat }: ChatRoomTemplate2Props) => {
  // console.log('Id값들 test값 확인', chat);
  const { chatRoomId: chatRoomId, memberId } = chat;
  console.log(
    'sockjs client 생성 전 data 확인용',
    'roomid : ',
    chatRoomId,
    'memberid : ',
    memberId,
  );
  const [chatContent, setChatContent] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatRequest[]>([]);

  console.log('chatContent값 확인', chatContent);
  // console.log('chatHistory값 확인', chatHistory);

  useEffect(() => {
    client.onConnect = () => {
      console.log('2. stomp 연결 완료');

      //stomp subscribe (stomp 구독 api)
      client.subscribe(`api/topic/chat-sub/${chatRoomId}`, (message) => {
        //   const newMessage = JSON.parse(message.body);
        //   console.log('Received new message:', newMessage);
        // });
        setChatContent(JSON.parse(message.body));
        console.log('확인해보자,', JSON.parse(message.body));
        console.log('3. stomp 구독 완료');
        if (message.body) {
          alert('got message with body ' + message.body);
        } else {
          alert('got empty message');
        }
      });
    };
    return () => {
      console.log('연결 불가니????????');
      // client.deactivate();
    };
  }, [chatRoomId]);

  client.activate();

  //stomp send (stomp 전송 api)
  const handleSendMessage = () => {
    if (client.connected) {
      const newMessage: ChatRequest = {
        messageType: 'CHAT',
        memberId: memberId,
        chatContent: chatContent,
      };
      console.log('message값 확인', newMessage);

      client.publish({
        destination: `api/app/${chatRoomId}`,
        body: JSON.stringify(newMessage),
        skipContentLengthHeader: true,
      });
      console.log('body값 확인로그', JSON.stringify(newMessage));
      // setChatContent('');
    } else {
      console.error('STOMP client is not connected. Message not sent.');
    }
  };

  return (
    <S.Container>
      <ChatContentList />
      <T.ContainerFluid>
        <T.Form>
          <T.Input
            type="text"
            placeholder="메시지 입력"
            value={chatContent}
            onChange={(e) => setChatContent(e.target.value)}
          />
          <TelegramLogo size={30} onClick={handleSendMessage} />
        </T.Form>
      </T.ContainerFluid>
    </S.Container>
  );
};
export default ChatRoomTemplate2;
