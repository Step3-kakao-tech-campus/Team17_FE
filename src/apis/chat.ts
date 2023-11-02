import { instance } from './index';

export const GetChatList = (userId: number) => {
  console.log('api 요청 되고 있니?');
  return instance.get(`api/chat/list`);
};

export const PostWalk = (userId: number, matchingId: number) => {
  console.log('api 요청');
  return instance.post(`api/walk/${userId}/${matchingId}`, {
    userId: userId,
    matchingId: matchingId,
  });
};
