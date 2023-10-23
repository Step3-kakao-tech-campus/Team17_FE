import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useGeolocation from '../../hooks/useGeolocation';
import Spinner from '../atoms/Spinner';
import { useMutation, useQuery } from 'react-query';
import { partTimeLocationSave, dogOwnerLookMap } from '../../apis/walking';

interface Props {
  user: string;
  matchingId: number;
}

// 사용자가 카카오 맵 화면을 띄워놓은 상태에서 화면에 출력하는 컴포넌트
const KakaoMap = ({ user, matchingId }: Props) => {
  const location = useGeolocation();
  // const { data } = useQuery('getWalkerLocation', () =>
  //   dogOwnerLookMap(matchingId),
  // );
  const [locationHistory, setLocationHistory] = useState<
    { lat: number; lng: number }[]
  >([
    { lat: 35.1480463, lng: 126.9258927 },
    { lat: 35.1481463, lng: 126.9259927 },
    { lat: 35.1482463, lng: 126.9260927 },
    { lat: 35.1483463, lng: 126.9261927 },
    { lat: 35.1484463, lng: 126.9262927 },
    { lat: 35.1485463, lng: 126.9263927 },
  ]);
  const { lat, lng } = location.coordinates;
  console.log(lat, lng);
  const [state, setState] = useState({
    center: {
      lat: lat,
      lng: lng,
    },
    errMsg: '',
    isLoading: true,
  });

  const { mutate: locationSave } = useMutation({
    mutationFn: partTimeLocationSave,
  });

  // 알바생의 위치가 바뀔 때마다 상태에 알바생 위치 저장 및 서버에 post 요청
  useEffect(() => {
    const username = user;
    if (username === 'partTimeWorker') {
      navigator.geolocation.watchPosition(
        (position) => {
          const locate = {
            matchingId: matchingId,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          };
          // 사용자의 이동 위치가 변할 때마다 서버에 post 요청
          locationSave(locate, {
            onSuccess: (res) => {
              console.log(res);
            },
            onError: (error: any) => {
              alert(error.response.message);
            },
          });
          setLocationHistory((prevHistory) => [
            ...prevHistory,
            {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          ]);
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
          }));
        },
      );
      setLocationHistory((prevHistory) => [...prevHistory, { lat, lng }]);
    } else {
    }
  }, [lat, lng]);

  // 처음 맵을 불러 올 때 알바생의 위치를 지도상에 출력
  useEffect(() => {
    // TODO: partTimeWorker로 수정 필요, 확인차 견주로 해놓음
    if (user === 'dogOwner') {
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setState((prev) => ({
              ...prev,
              center: {
                lat: position.coords.latitude, // 위도
                lng: position.coords.longitude, // 경도
              },
              isLoading: false,
            }));
          },
          (err) => {
            setState((prev) => ({
              ...prev,
              errMsg: err.message,
              isLoading: false,
            }));
          },
        );
      } else {
        // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용 설정
        setState((prev) => ({
          ...prev,
          errMsg: '위치를 불러올 수 없어요..',
          isLoading: false,
        }));
      }
    } else {
      // setLocationHistory(data?.data.response.walkRoadLatLngDTOS);
    }
  }, []);

  return (
    <>
      {state.isLoading ? (
        <Spinner />
      ) : (
        <Map
          center={state.center}
          style={{ width: '100%', height: '100%' }}
          level={1}
        >
          <MapMarker
            position={{ lat: lat, lng: lng }}
            image={{
              src: '/images/user_marker.png',
              size: { width: 25, height: 25 },
            }}
          >
            <SpeechBubble>
              <div style={{ color: '#000', padding: '4px' }}>
                {state.errMsg ? state.errMsg : '열심히 산책중이에요!'}
              </div>
            </SpeechBubble>
          </MapMarker>
          <Polyline
            path={locationHistory} // 위치 이력 배열
            strokeColor={'#FF0000'} // 라인 색상
            strokeOpacity={0.7} // 라인 투명도
            strokeWeight={3} // 라인 두께
          />
        </Map>
      )}
    </>
  );
};
export default KakaoMap;

const SpeechBubble = styled.div`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
