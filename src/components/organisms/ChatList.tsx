import ChatListItem from '../molecules/ChatListItem';
import { GetChatList } from '../../apis/chat';
import { useEffect, useState } from 'react';
import Spinner from '../atoms/Spinner';
type Chat = {
  chatRoomId: number;
  memberId: number;
  memberNickname: string;
  memberImage: string;
  chatContent: string;
  walkType: string;
  matchId: number;
  isDogOwner: boolean;
};
const ChatList = () => {
  const [Chatlist, setChatList] = useState([]);
  useEffect(() => {
    GetChatList()
      .then((response) => {
        // console.log('chatlist', response);
        setChatList(response.data.response);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          GetChatList()
            .then((response) => {
              // console.log('chatlist', response);
              setChatList(response.data.response);
            })
            .catch((_error) => {
              // console.log('에러', error);
            });
        } else {
        }
      });
  }, []);
  return (
    <>
      {Chatlist ? (
        Chatlist.map((item: Chat) => (
          <ChatListItem key={item.chatRoomId} chat={item} />
        ))
      ) : (
        <>
          <Spinner />
        </>
      )}
    </>
  );
};
export default ChatList;
