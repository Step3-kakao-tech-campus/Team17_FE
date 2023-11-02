import { instance } from './index';

export const GetChatList = (userId: number) => {
  console.log('api 요청 되고 있니?');
  return instance.get(`api/chat/list`);
};
