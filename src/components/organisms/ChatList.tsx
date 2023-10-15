import ChatListItem from '../molecules/ChatListItem';
import * as S from '../../styles/organisms/ChatList';

const ChatList = () => {
  const data = [
    {
        chat: {
            message: '감사합니다 믿고...',
            image: '/images/dog-sample.png',
            activate: 'yes'
        },
        name: '복슬이',
        id: 1,
    },
    {
        chat: {
            message: '네네 알겠습니다 ㅎㅎ',
            image: '/images/dog-sample.png',
            activate: 'yes'
        },
        name: '시바',
        id: 2,
    },
    {
        chat: {
            message: '우리 쿠키 잘 부탁드려요 ~',
            image: '/images/dog-sample.png',
            activate: 'no'
        },
        name: '쿠키',
        id: 3, 
    },
  ];

  return (
    <S.Container>
      {data.map((item) => (
        <ChatListItem
          key={item.id} // user id
          chat={item.chat} // last message
          name={item.name} // dog name
        />
      ))}
    </S.Container>
  );
};

export default ChatList;