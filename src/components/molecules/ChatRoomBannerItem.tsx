import { PostWalk } from '../../apis/chat';
import * as S from '../../styles/molecules/ChatRoomBannerItem';
import Image from '../atoms/Image';
import { ArrowLeftIcon } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';

interface Chat {
  name: string;
  image: string;
}

type ListItemProps = {
  chat: Chat;
};

const ChatRoomBanner = ({ chat }: ListItemProps) => {
  const { name, image } = chat;

  const navigate = useNavigate();

  const gobackLogo = () => {
    navigate('/chatlist');
  };

  const mapbutton = () => {
    console.log('API 요청이 되고 있는지 확인');
    PostWalk(2, 4)
      .then((response) => {
        console.log('응답', response);
        navigate('/walking');
      })
      .catch((error) => {
        console.log('에러', error);
      });
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
          <S.ButtonWrapper onClick={mapbutton}>
            <h1>산책시키기</h1>
          </S.ButtonWrapper>
        </S.walkingButton>
      </S.Container>
    </>
  );
};

export default ChatRoomBanner;
