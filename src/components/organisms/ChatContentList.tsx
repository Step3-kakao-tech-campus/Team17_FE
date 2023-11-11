import ChatContentListItem from '../molecules/ChatContentListItem';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../atoms/Spinner';
import { GetChatContent } from '../../apis/chat';

interface ChatContent {
  id: number;
  content: string;
  messageType: string;
  memberId: number;
}

const ChatContentList = (roomId: number) => {
  const { state } = useLocation();
  // 현재 채팅방 룸아이디 출력
  // console.log('state', state.userinfo.chatRoomId);
  const [ChatContentlist, setChatContentList] = useState([]);
  // console.log('roomId', roomId);

  useEffect(() => {
    // GetChatContent(state.userinfo.chatRoomId)
    GetChatContent(roomId)
      .then((response) => {
        // console.log('ChatContent Get요청 api 연동 확인용 log', response);
        setChatContentList(response.data.response);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          GetChatContent(roomId)
            .then((response) => {
              console.log('ChatContent Get요청 api 연동 확인용 log', response);
              setChatContentList(response.data.response);
            })
            .catch((error) => {
              console.log('에러', error);
            });
        } else {
          console.log('에러', error);
        }
      });
  }, []);

  return (
    <>
      {ChatContentlist ? (
        ChatContentlist.map((item: ChatContent) => (
          <ChatContentListItem key={item.id} chatcontent={item} />
        ))
      ) : (
        <>
          <Spinner />
        </>
      )}
    </>
  );
};

export default ChatContentList;
