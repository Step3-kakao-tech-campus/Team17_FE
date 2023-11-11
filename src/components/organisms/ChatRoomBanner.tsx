import * as S from '../../styles/organisms/ChatRoomBanner';
import ChatRoomBannerItem from '../molecules/ChatRoomBannerItem';
import { useLocation } from 'react-router-dom';
import Spinner from '../atoms/Spinner';

const ChatRoomBanner = () => {
  const { state } = useLocation();
  console.log('state', state);

  return (
    <S.Container>
      {state ? <ChatRoomBannerItem userinfo={state.userinfo} /> : null}
    </S.Container>
  );
};

export default ChatRoomBanner;
