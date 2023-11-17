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
  const [isgetData, setIsGetData] = useState(false);
  const [intervalId, setIntervalId] = useState<any>();
  // 채팅 목록에서 userId, matchingId, isOwner를 받아온다.
  const navigate = useNavigate();
  useEffect(() => {
    const post = () => {
      if (userinfo.isDogOwner) {
        walkingStatus(userinfo.matchingId)
          .then((res) => {
            setStatus(res.data.response.walkStatusField);
            setIsGetData(true);
          })
          .catch((_err) => {
            // alert(err.data.response);
          });
      } else if (!userinfo.isDogOwner) {
        walkingStatus(userinfo.matchingId)
          .then((res) => {
            setStatus(res.data.response.walkStatusField);
          })
          .catch((_err) => {
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
    if (userinfo.walkType === 'READY') {
      navigate('/walking', {
        state: {
          status: 'READY',
          isDogOwner: userinfo.isDogOwner,
          matchingId: userinfo.matchingId,
          chatRoomId: userinfo.chatRoomId,
        },
      });
    } else {
      navigate('/walking', {
        state: {
          status: 'ACTIVATE',
          isDogOwner: userinfo.isDogOwner,
          matchingId: userinfo.matchingId,
          chatRoomId: userinfo.chatRoomId,
        },
      });
    }
  };
  const waitactivatebutton = () => {
    alert('산책 허락 대기중입니다.');
  };
  const Ownermapbutton = () => {
    // console.log('산책중인 map으로 이동합니다.');
    if (status === 'READY') {
      alert('산책중이 아닙니다.');
      return;
    }
    if (status === 'END') {
      alert('산책이 종료되었습니다.');
      return;
    }
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
      .then((_response) => {
        setStatus('READY');
        // setStatus(response.response.status);
        navigate('/payments', {
          state: {
            matchingId: userinfo.matchingId,
          },
        });
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          PostWalk(userinfo.userId, userinfo.matchingId)
            .then((_response) => {
              // console.log('status', status);
            })
            .catch((error) => {
              alert(error.data.error.message);
            });
        } else {
          alert(error.data.error.message);
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
        <Image
          src={userImage || '/images/default_profile.png'}
          alt="강아지 임시 이미지"
          size="3.5"
        />
        <S.NameWrapper>{name}</S.NameWrapper>
        {/* {status ? ( */}

        {userinfo.isDogOwner ? (
          <S.walkingButton disabled={!isgetData}>
            {isgetData ? (
              <S.ButtonWrapper>
                {status === '' ? (
                  <h1 onClick={walkAck}>산책 허락하기</h1> // ready
                ) : (
                  //견주이면서 산책중이거나 산책이끝나면
                  <h1 onClick={Ownermapbutton}>지도 보기</h1> // active
                )}
              </S.ButtonWrapper>
            ) : (
              <Spinner />
            )}
          </S.walkingButton>
        ) : (
          //알바생이면서 산책 대기중이면
          <S.walkingButton disabled={!status || !isgetData}>
            {isgetData ? (
              <S.ButtonWrapper>
                {status === '' ? (
                  <h1 onClick={waitactivatebutton}>산책 허락 대기중</h1>
                ) : (
                  //알바생이면서 산책중이거나 산책이끝나면
                  <h1 onClick={mapbutton}>지도 보기</h1>
                )}
              </S.ButtonWrapper>
            ) : (
              <Spinner />
            )}
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
