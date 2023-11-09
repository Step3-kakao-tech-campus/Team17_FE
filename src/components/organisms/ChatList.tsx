import ChatListItem from '../molecules/ChatListItem';
import * as S from '../../styles/organisms/ChatList';
import { GetChatList } from '../../apis/chat';
import { useEffect, useState } from 'react';
import Spinner from '../atoms/Spinner';

interface Chat {
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
  const [Chatlist, setChatList] = useState([]);

  useEffect(() => {
    GetChatList()
      .then((response) => {
        console.log('chatlist', response);
        setChatList(response.data.response);
      })
      .catch((error) => {
        console.log('에러', error);
      });
  }, []);

  return (
    <S.Container>
      {Chatlist ? (
        Chatlist.map((item: Chat) => <ChatListItem key={item.id} chat={item} />)
      ) : (
        <S.Loading>
          <Spinner />
        </S.Loading>
      )}
    </S.Container>
  );
};

export default ChatList;
