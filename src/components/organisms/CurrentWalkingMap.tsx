import KakaoMap from '../molecules/KakaoMap';
import * as S from '../../styles/organisms/CurrentWalkingMap';
import { useMutation } from 'react-query';
import {
  walkingStart,
  walkingEnd,
  partTimeLocationSave,
} from '../../apis/walking';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserType, WalkStatus } from '../../const/code';
import BackBar from '../molecules/BackBar';

const CurrentWalkingMap = () => {
  const { state } = useLocation();
  const matchingId = state?.matchingId || 1;
  const [intervalId, setIntervalId] = useState<any>(null);

  // // 웹 워커 생성
  // const workerScript = `
  // self.addEventListener('message', (e) => {
  //   // 웹 워커로부터 메시지를 받아 위치 업데이트 및 서버 통신 수행
  //   const { matchingId, lat, lng } = e.data;

  //   // 서버로 위치 정보를 전송하는 코드 작성
  //   // 위치를 주기적으로 업데이트하고 서버로 보낸다.
  //   const processLocationData = (matchingId, lat, lng) => {
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + '${userToken}',
  //   }

  //   const body = {
  //     lat,
  //     lng,
  //   }

  //   // 위치 정보 서버로 전송
  //   fetch('https://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/walkRoad/${matchingId}', {
  //     method: 'POST',
  //     header: headers,
  //     body: body,
  //   })
  //     .then((data) => {
  //       console.log('Location data sent to server:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error sending location data:', error);
  //     });
  //   }

  //   // 위치 업데이트를 주기적으로 실행
  //   const intervalId = setInterval(() => {
  //     if(navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const {latitude, longitude} = position.coords;
  //       console.log('동작!!!');
  //       // 웹 워커에 위치 데이터 전송
  //       processLocationData(matchingId, latitude, longitude);
  //     },
  //     (err) => {
  //       console.error('Error getting user location:', err);
  //     }
  //     );
  //   } else {
  //     console.error('Geolocation is not supported');
  //   }
  //   }, 5000); // 5초마다 업데이트

  //   self.addEventListener('terminate', () => {
  //     // 웹 워커 종료 시 실행
  //     clearInterval(intervalId);
  //   });
  // });
  // `;
  // const blob = new Blob([workerScript], { type: 'application/javascript' });
  // const workerUrl = URL.createObjectURL(blob);
  // const worker = new Worker(workerUrl);
  const navigate = useNavigate();
  const user: string =
    state?.master || state?.isDogOwner
      ? UserType.DOG_OWNER
      : UserType.PART_TIMER || 'PART_TIMER'; // TODO: user props로 받아오기
  const [walkStatus, setWalkStatus] = useState(state.status);
  const buttonInnerText =
    walkStatus === WalkStatus.ACTIVATE ? '산책 종료하기' : '산책 시작하기';

  const { mutate: mutateWalkingStart } = useMutation({
    mutationFn: walkingStart,
  });

  const { mutate: mutateWalkingEnd } = useMutation({
    mutationFn: walkingEnd,
  });

  const onClickBackCursor = () => {
    navigate(-1);
  };

  // 알바생의 경우 자신의 위치 업데이트
  const startLocationUpdate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const postData = {
            matchingId,
            location: {
              lat: latitude,
              lng: longitude,
            },
          };
          partTimeLocationSave(postData).catch((_err) => {
            if (_err.message === 'refresh') {
              partTimeLocationSave(postData).catch((_err) => {
                alert('위치 업데이트에 실패했습니다.');
              });
            }
          });
        },
        (_err) => {
          alert('위치 업데이트에 실패했습니다.');
        },
      );
    } else {
      alert('위치 업데이트에 실패했습니다.');
    }
  };

  // 산책 종료 버튼 클릭 시 clearInterval을 통해 업데이트 중지
  const stopLocationUpdate = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleClickButton = () => {
    if (walkStatus === WalkStatus.ACTIVATE) {
      mutateWalkingEnd(matchingId, {
        onSuccess: (res) => {
          // 산책 종료 알림 보내기
          alert('산책을 종료합니다!');
          // 웹 워커 종료
          // worker.terminate();
          stopLocationUpdate();
          navigate('/review', {
            state: {
              userId: res.data.response.userId,
              receiveMemberId: res.data.response.receiveMemberId,
              notificationId: res.data.response.notificationId,
              profile: res.data.response.profile,
              walkId: res.data.response.walkId,
            },
            replace: true,
          });
        },
        onError: (error: any) => {
          if (error.message === 'refresh') {
            mutateWalkingEnd(matchingId, {
              onSuccess: (res) => {
                alert('산책을 종료합니다!');
                // 웹 워커 종료
                // worker.terminate();
                stopLocationUpdate();
                navigate('/review', {
                  state: {
                    userId: res.data.response.userId,
                    receiveMemberId: res.data.response.receiveMemberId,
                    notificationId: res.data.response.notificationId,
                    profile: res.data.response.profile,
                    walkId: res.data.response.walkId,
                  },
                  replace: true,
                });
              },
              onError: (error: any) => {
                alert(error.response.message);
              },
            });
          } else {
            alert(error.response.message);
          }
        },
      });
    } else {
      mutateWalkingStart(matchingId, {
        onSuccess: (_res) => {
          // 산책 시작 알림 보내기
          alert('산책을 시작합니다!');
          setWalkStatus(WalkStatus.ACTIVATE);
          // 알바생이 산책 시작 버튼을 클릭하면 알바생 위치를 웹 워커를 통해 실시간 업데이트
          startLocationUpdate();
          setIntervalId(setInterval(startLocationUpdate, 5000)); // 2초마다 업데이트
        },
        onError: (error: any) => {
          if (error.message === 'refresh') {
            mutateWalkingStart(matchingId, {
              onSuccess: (_res) => {
                alert('산책을 시작합니다!');
                setWalkStatus(WalkStatus.ACTIVATE);
                // 알바생이 산책 시작 버튼을 클릭하면 알바생 위치를 웹 워커를 통해 실시간 업데이트
                startLocationUpdate();
                setIntervalId(setInterval(startLocationUpdate, 5000)); // 2초마다 업데이트
              },
              onError: (error: any) => {
                alert(error.response.message);
              },
            });
          } else {
            alert(error.response.message);
          }
        },
      });
    }
  };

  return (
    <S.Container>
      <S.BackCursor>
        <BackBar to="/chatroom" />
      </S.BackCursor>
      <KakaoMap user={user} matchingId={matchingId} />
      <S.BottomBox>
        {user === UserType.DOG_OWNER ? (
          <S.Button onClick={onClickBackCursor}>메세지 보내기</S.Button>
        ) : (
          <S.Button onClick={handleClickButton}>{buttonInnerText}</S.Button>
        )}
      </S.BottomBox>
    </S.Container>
  );
};

export default CurrentWalkingMap;
