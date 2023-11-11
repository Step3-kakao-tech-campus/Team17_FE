import { instance } from './index';

export const GetChatList = () => {
  const res = instance.get('api/chat/list');
  return res;
};

export const PostWalk = (userId: number, matchingId: number) => {
  return instance.post(`api/walk/${userId}/${matchingId}`, {
    userId: userId,
    matchingId: matchingId,
  });
};

// 채팅방 생성 api
export const PostChatRoom = (
  notiMemberId: number,
  appMemberId: number,
  matchId: number,
) => {
  return instance.post('api/chatroom/create', {
    notiMemberId: notiMemberId,
    appMemberId: appMemberId,
    matchId: matchId,
  });
};

export const GetChatContent = (chatRoomId: number) => {
  return instance.get(`api/chat/${chatRoomId}`);
};
