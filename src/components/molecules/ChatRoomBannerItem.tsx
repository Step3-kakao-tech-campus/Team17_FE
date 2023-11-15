import { PostWalk } from '../../apis/chat';
import * as S from '../../styles/molecules/ChatRoomBannerItem';
import Image from '../atoms/Image';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackBar from './BackBar';
import { walkingStatus } from '../../apis/walking';
import Spinner from '../atoms/Spinner';
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
  // console.log('userinfo', userinfo);
  const { userImage, name } = userinfo;
  const [status, setStatus] = useState('');
  console.log('웍타입', userinfo.walkType);
  const [intervalId, setIntervalId] = useState<any>();
  const [buttonInnerText, setButtonInnerText] = useState('');
  // 채팅 목록에서 userId, matchingId, isOwner를 받아온다.
  const navigate = useNavigate();
  useEffect(() => {
    const post = () => {
      console.log('userinfo.isDogOwner', userinfo.isDogOwner);
      console.log('status', status);
      if (userinfo.isDogOwner && status) {
        walkingStatus(userinfo.matchingId)
          .then((res) => {
            setStatus(res.data.response.walkStatus);
          })
          .catch((err) => {
            console.log('err', err);
            // alert(err.data.response);
          });
      } else if (!userinfo.isDogOwner) {
        walkingStatus(userinfo.matchingId)
          .then((res) => {
            setStatus(res.data.response.walkStatus);
          })
          .catch((err) => {
            console.log('err', err);
            // alert(err.data.response);
          });
      }
    };
    setIntervalId(setInterval(post, 5000));
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const mapbutton = () => {
    navigate('/walking', {
      state: {
        status: 'ACTIVATE',
        isDogOwner: userinfo.isDogOwner,
        matchingId: userinfo.matchingId,
        chatRoomId: userinfo.chatRoomId,
      },
    });
  };
  const waitactivatebutton = () => {
    alert('산책 허락 대기중입니다.');
  };
  const Ownermapbutton = () => {
    // console.log('산책중인 map으로 이동합니다.');
    navigate('/walking', {
      state: {
        status: 'ACTIVATE',
        isDogOwner: userinfo.isDogOwner,
        matchingId: userinfo.matchingId,
        chatRoomId: userinfo.chatRoomId,
      },
    });
  };
  // 산책허락하기
  const walkAck = () => {
    PostWalk(userinfo.userId, userinfo.matchingId)
      .then((response) => {
        console.log('산책허락 성공', response);
        setStatus('READY');
        // setStatus(response.response.status);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          PostWalk(userinfo.userId, userinfo.matchingId)
            .then((response) => {
              console.log('산책허락 성공', response);
              // console.log('status', status);
            })
            .catch((error) => {
              console.log('산책 허락 실패', error);
            });
        } else {
          console.log('산책 허락 실패', error);
        }
      });
    // console.log('map으로 이동합니다.');
  };

  return (
    <>
      <S.Container>
        <S.GoBackButtonWrapper>
          <BackBar to="/chatlist" />
        </S.GoBackButtonWrapper>
        <Image src={userImage} alt="강아지 임시 이미지" size="3.5" />
        <S.NameWrapper>{name}</S.NameWrapper>
        {/* {status ? ( */}

        {userinfo.isDogOwner ? (
          <S.walkingButton>
            <S.ButtonWrapper>
              {status === '' ? (
                <h1 onClick={walkAck}>산책 허락하기</h1> // ready
              ) : (
                //견주이면서 산책중이거나 산책이끝나면
                <h1 onClick={Ownermapbutton}>지도 보기</h1> // active
              )}
            </S.ButtonWrapper>
          </S.walkingButton>
        ) : (
          //알바생이면서 산책 대기중이면
          <S.walkingButton disabled={!status}>
            <S.ButtonWrapper>
              {status === '' ? (
                <h1 onClick={waitactivatebutton}>산책 허락 대기중</h1>
              ) : (
                //알바생이면서 산책중이거나 산책이끝나면
                <h1 onClick={mapbutton}>지도 보기</h1>
              )}
            </S.ButtonWrapper>
          </S.walkingButton>
        )}

        {/* ) : (
            <S.ButtonWrapper>
              <Spinner />
            </S.ButtonWrapper> */}
        {/* )} */}
      </S.Container>
    </>
  );
};
export default ChatRoomBannerItem;
