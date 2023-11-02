import * as S from '../../styles/molecules/ChatRoomBannerItem';
import Image from '../atoms/Image';
import { ArrowLeftIcon } from '@mui/x-date-pickers';
import { GrainsSlash } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface Chat {
  name: string;
  image: string;
  walking: string;
}

type ListItemProps = {
  chat: Chat;
};

const ChatRoomBanner = ({ chat }: ListItemProps) => {
  const { name, image, walking } = chat;

  const navigate = useNavigate();

  const gobackLogo = () => {
    navigate('/chatlist');
  };

  const walkingbutton = () => {
    // 산책 허락하기
  };

  const mapbutton = () => {
    navigate('/walking');
  };

  return (
    <>
      <S.Container>
        <S.GoBackButtonWrapper onClick={gobackLogo}>
          <ArrowLeftIcon />
        </S.GoBackButtonWrapper>

        <Image src={image} alt="강아지 임시 이미지" size="3.5" />
        <S.NameWrapper>{name}</S.NameWrapper>

        <S.walkingButton>
          {walking === 'yes' ? (
            <S.ButtonWrapper onClick={mapbutton}>
              <h1>지도 보기</h1>
            </S.ButtonWrapper>
          ) : (
            <S.ButtonWrapper onClick={walkingbutton}>
              <h1>산책시키기</h1>
            </S.ButtonWrapper>
          )}
        </S.walkingButton>
      </S.Container>
    </>
  );
};

export default ChatRoomBanner;
