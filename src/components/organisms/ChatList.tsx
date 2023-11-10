import ChatListItem from '../molecules/ChatListItem';
import { GetChatList } from '../../apis/chat';
import { useEffect, useState } from 'react';
import Spinner from '../atoms/Spinner';

interface item {
  id: number;
  chatRoomId: number;
  memberId: number;
  memberNickname: string;
  memberImage: string;
  chatContent: string;
  walkType: string;
  matchId: number;
}

const ChatList = () => {
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
    <>
      {chatList ? (
        chatList.map((chat: any) => <ChatListItem key={chat.id} chat={chat} />)
      ) : (
        <>
          <Spinner />
        </>
      )}
    </>
  );
};

export default ChatList;
