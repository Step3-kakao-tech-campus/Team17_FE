import { PostWalk } from '../../apis/chat';
import * as S from '../../styles/molecules/ChatRoomBannerItem';
import Image from '../atoms/Image';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Dog } from '@phosphor-icons/react';
import BackBar from './BackBar';

type ChatRoomBannerProps = {
  userinfo: {
    chatRoomId: number;
    userId: number;
    name: string;
    userImage: string;
    walkType: string;
    matchingId: number;
    isDogOwner: boolean;
  };
};

const ChatRoomBannerItem = ({ userinfo }: ChatRoomBannerProps) => {
  console.log('userinfo', userinfo);
  const { userImage, name } = userinfo;
  const [status, setStatus] = useState('');
  const [chatRoomId, _setchatRoomId] = useState(Number);
  const { state } = useLocation();
  // 채팅 목록에서 userId, matchingId, isOwner를 받아온다.

  const navigate = useNavigate();

  const mapbutton = () => {
    console.log('산책중인 map으로 이동합니다.');
    navigate('/walking', {
      state: {
        userinfo: {
          status: status,
          chatRoomId: chatRoomId,
          matchingId: userinfo.matchingId,
        },
      },
    });
  };

  const activatebutton = () => {
    console.log('산책을 허락합니다');
    console.log(chatRoomId);
    navigate('/walking', {
      state: {
        userinfo: {
          status: status,
          matchingId: userinfo.matchingId,
          isOwner: state.isOwner,
        },
      },
    });
  };

  const waitactivatebutton = () => {
    alert('산책 허락 대기중입니다.');
  };

  const Ownermapbutton = () => {
    console.log('산책중인 map으로 이동합니다.');

    navigate('/walking', {
      state: {
        userinfo: {
          status: status,
          chatRoomId: chatRoomId,
          isOwner: state.isOwner,
        },
      },
    });
  };

  const walkAck = () => {
    PostWalk(5, 8)
      .then((response) => {
        console.log('응답', response);
        // setStatus(response.response.status);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          PostWalk(5, 8)
            .then((response) => {
              console.log('응답', response);
              console.log('status', status);
            })
            .catch((error) => {
              console.log('에러', error);
            });
        } else {
          console.log('에러', error);
        }
      });
    console.log('map으로 이동합니다.');
  };
  console;

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
            {!state.isDogOwner ? (
              //견주이면서 산책 대기중이면
              status === '' ? (
                <h1 onClick={walkAck}>산책 허락하기</h1>
              ) : (
                //견주이면서 산책중이거나 산책이끝나면
                <h1 onClick={Ownermapbutton}>지도 보기</h1>
              )
            ) : //알바생이면서 산책 대기중이면
            status === '' ? (
              <h1 onClick={waitactivatebutton}>산책 허락 대기중</h1>
            ) : (
              //알바생이면서 산책중이거나 산책이끝나면
              <h1 onClick={mapbutton}>지도 보기</h1>
            )}
          </S.ButtonWrapper>
        </S.walkingButton>
      </S.Container>
    </>
  );
};

export default ChatRoomBannerItem;
