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

type UserInfo = {
  id: number;
  name: string;
  userImage: string;
};

type DataProps = {
  userInfo: UserInfo[];
};

const ChatRoomBanner = ({ userInfo }: DataProps) => {
  const { state } = useLocation();
  console.log('state', state);

  return (
    <S.Container>
      {userInfo ? (
        userInfo.map((item) => (
          <ChatRoomBannerItem
            key={item.id} // user id
            chat={item} // last message
          />
        ))
      ) : (
        <S.Loading>
          <Spinner />
        </S.Loading>
      )}
    </S.Container>
  );
};

export default ChatRoomBanner;
