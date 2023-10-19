import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useGeolocation from '../../hooks/useGeolocation';
import Spinner from '../atoms/Spinner';

const KakaoMap = () => {
  const location = useGeolocation();
  const { lat, lng } = location.coordinates;
  const [state, setState] = useState({
    center: {
      lat: lat,
      lng: lng,
    },
    errMsg: '',
    isLoading: true,
  });

  useEffect(() => {
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
  }, []);

  return (
    <>
      {state.isLoading ? (
        <Spinner />
      ) : (
        <Map
          center={state.center}
          style={{ width: '100%', height: '100%' }}
          level={2}
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

const SpinnerWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
