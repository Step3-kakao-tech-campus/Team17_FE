import ChatContentListItem from '../molecules/ChatContentListItem';
import * as S from '../../styles/organisms/ChatList';
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

const ChatContentList = () => {
  const { state } = useLocation();
  // 현재 채팅방 룸아이디 출력
  // console.log('state', state.userinfo.chatRoomId);
  const [ChatContentlist, setChatContentList] = useState([]);

  useEffect(() => {
    // GetChatContent(state.userinfo.chatRoomId)
    GetChatContent(1)
      .then((response) => {
        console.log('ChatContent Get요청 api 연동 확인용 log', response);
        setChatContentList(response.data.response);
      })
      .catch((error) => {
        console.log('에러', error);
      });
  }, []);

  return (
    <S.Container>
      {ChatContentlist ? (
        ChatContentlist.map((item: ChatContent) => (
          <ChatContentListItem key={item.id} chatcontent={item} />
        ))
      ) : (
        <S.Loading>
          <Spinner />
        </S.Loading>
      )}
    </S.Container>
  );
};

export default ChatContentList;
