import { PostWalk } from '../../apis/chat';
import * as S from '../../styles/molecules/ChatRoomBannerItem';
import Image from '../atoms/Image';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Dog } from '@phosphor-icons/react';
import BackBar from './BackBar';

interface dog {
  name: string;
  image: string;
}

type ListItemProps = {
  chat: dog;
};

const ChatRoomBanner = ({ chat }: ListItemProps) => {
  const { name, image } = chat;
  const [status, _] = useState('');
  const [chatRoomId, _unused] = useState('');

  const navigate = useNavigate();

  // const gobackLogo = () => {
  //   navigate('/chatlist');
  // };

  const mapbutton = () => {
    console.log('API 요청이 되고 있는지 확인');
    console.log(chatRoomId);
    navigate('/walking', {
      state: {
        userinfo: {
          status: status,
          chatRoomId: chatRoomId,
        },
      },
    });
    PostWalk(2, 4)
      .then((response) => {
        console.log('응답', response);
        console.log('status', status);
      })
      .catch((error) => {
        console.log('에러', error);
      });
  };

  return (
    <>
      <S.Container>
        <S.GoBackButtonWrapper>
          <BackBar to="/chatlist" />
        </S.GoBackButtonWrapper>
        <Image src={image} alt="강아지 임시 이미지" size="3.5" />
        <S.NameWrapper>{name}</S.NameWrapper>
        <S.walkingButton>
          <S.ButtonWrapper onClick={mapbutton}>
            <h1>
              산책
              <Dog size={30} color="#857d3b" />
            </h1>
          </S.ButtonWrapper>
        </S.walkingButton>
      </S.Container>
    </>
  );
};

export default ChatRoomBanner;
