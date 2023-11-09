import * as S from '../../styles/molecules/ProfileBanner';
import ChatRoomBannerItem from '../molecules/ChatRoomBannerItem';
import { useLocation } from 'react-router-dom';
import Spinner from '../atoms/Spinner';

// const data = [
//   {
//     userInfo: {
//       name: state.name,
//       userImage: state.userImage,
//     },
//     id: state.id,
//   },
// ];

// type UserInfo = {
//   id: number;

//   name: string;
//   userImage: string;
// };

// type DataProps = {
//   userInfo: UserInfo[];
// };

const ChatRoomBanner = () => {
  const { state } = useLocation();
  console.log('state', state.userinfo.chatRoomId);
  const chat = state.userinfo;
  return (
    <S.Container>
      {state.userinfo ? (
        <ChatRoomBannerItem chat={chat} />
      ) : (
        <S.Loading>
          <Spinner />
        </S.Loading>
      )}
    </S.Container>
  );
};

export default ChatRoomBanner;
