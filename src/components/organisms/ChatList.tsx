import ChatListItem from '../molecules/ChatListItem';
import * as S from '../../styles/organisms/ChatList';
import { GetChatList } from '../../apis/chat';
import { useEffect, useState } from 'react';

const ChatList = () => {
  // 채팅 목록 페이지 이동시 유저 아이디 전달해줘야 함.
  const [chatList, setChatList] = useState<any[]>([]);
  console.log(chatList);

  useEffect(() => {
    GetChatList(1)
      .then((chat) => {
        setChatList(chat.data.response);
      })
      .catch((error) => {
        console.log('에러', error);
      });
  }, []);

  console.log(chatList);

  return (
    <S.Container>
      {chatList.map((chat, index) => (
        <ChatListItem key={index} chat={chat} />
      ))}
    </S.Container>
  );
};

export default ChatList;
