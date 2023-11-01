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
    navigate('/walking');
  };

  return (
    <>
      <S.Container>
        <S.TitleWrapper onClick={gobackLogo}>
          <ArrowLeftIcon />
        </S.TitleWrapper>

        <Image src={image} alt="강아지 임시 이미지" size="3.5" />
        <S.NameWrapper>
          <h1>{name}</h1>
        </S.NameWrapper>

        <S.LogoutButton>
          {walking === 'yes' ? (
            <GrainsSlash size={10} color="#01c522" />
          ) : (
            <GrainsSlash size={10} color="#3d3d3d" />
          )}
        </S.LogoutButton>
      </S.Container>
    </>
  );
};

export default ChatRoomBanner;
