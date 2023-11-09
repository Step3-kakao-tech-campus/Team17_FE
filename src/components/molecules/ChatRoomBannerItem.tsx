import { PostWalk } from '../../apis/chat';
import * as S from '../../styles/molecules/ChatRoomBannerItem';
import Image from '../atoms/Image';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Dog, GrainsSlash } from '@phosphor-icons/react';
import BackBar from './BackBar';

interface dog {
  name: string;
  userImage: string;
}

type ListItemProps = {
  chat: dog;
};

const ChatRoomBanner = ({ chat }: ListItemProps) => {
  const { name, userImage } = chat;
  const [status, setstatus] = useState('');
  const [chatRoomId, setchatRoomId] = useState(Number);

  const navigate = useNavigate();

  const activatebutton = () => {
    console.log('산책중인 map으로 이동합니다.');
    navigate('/walking', {
      state: {
        userinfo: {
          status: status,
          chatRoomId: chatRoomId,
        },
      },
    });
  };

  const mapbutton = () => {
    console.log('산책을 허락합니다');
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

        <Image src={userImage} alt="강아지 임시 이미지" size="3.5" />
        <S.NameWrapper>{name}</S.NameWrapper>
        <S.walkingButton>
          <S.ButtonWrapper>
            {status === 'activate' ? (
              <h1 onClick={mapbutton}>
                지도보기
                <Dog size={30} color="#857d3b" />
              </h1>
            ) : (
              <h1 onClick={activatebutton}>
                지도보기
                <Dog size={30} color="#857d3b" />
              </h1>
            )}
          </S.ButtonWrapper>
        </S.walkingButton>
      </S.Container>
    </>
  );
};

export default ChatRoomBanner;
