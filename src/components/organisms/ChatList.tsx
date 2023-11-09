import ChatListItem from '../molecules/ChatListItem';
import * as S from '../../styles/organisms/ChatList';
import { GetChatList } from '../../apis/chat';
import { useEffect, useState } from 'react';

const ChatList = () => {
  // const data = [
  //   {
  //     userId: 2,
  //     userImage: 'd',
  //     chatContent: '안녕하세요',
  //     walkType: '산책중',
  //     matchingId: 4,
  //   },
  // ];

  interface item {
    chatRoomId: number;
    userId: number;
    userImage: string;
    chatContent: string;
    walkType: string;
    matchId: number;
  }

  // 채팅 목록 페이지 이동시 유저 아이디 전달해줘야 함.
  const [chatList, setChatList] = useState<item[]>([]);
  console.log(chatList);

  useEffect(() => {
    GetChatList()
      .then((res) => {
        console.log('res', res);
        setChatList([res.data.response]);
      })
      .catch((error) => {
        console.log('에러', error);
      });
  }, []);

  return (
    <S.Container>
      {chatList.map((chat, index) => (
        <ChatListItem key={index} chat={chat} />
      ))}
      {/* {data.map((chat, index) => (
        <ChatListItem key={index} chat={chat} />
      ))} */}
    </S.Container>
  );
};

export default ChatList;
