import { MapPin, ArrowCounterClockwise } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/Location';
import useGeolocation from '../../hooks/useGeolocation';
import { useEffect, useState } from 'react';
import kakaoLocation from '../../utils/kakaoLocation';

const Location = () => {
  const [locate, setLocate] = useState({
    lat: 0,
    lng: 0,
  });
  const [address, setAddress] = useState('');
  const location = useGeolocation();

  const handleRefresh = () => {
    // 새로고침하여 위치 재설정
    window.location.reload();
  };

  useEffect(() => {
    if (location.coordinates) {
      setLocate({
        lat: location.coordinates.lat,
        lng: location.coordinates.lng,
      });
    }
  }, [location.coordinates]);

  useEffect(() => {
    if (location.loaded && locate.lat !== 0 && locate.lng !== 0) {
      const fetchKakaoAddress = async () => {
        try {
          const res = await kakaoLocation(locate);
          const kakaoAddress = res?.data?.documents[0]?.address_name;
          setAddress(kakaoAddress || '주소를 불러오고 있어요!');
        } catch (error: any) {
          console.error(error);
        }
      };
      fetchKakaoAddress();
    }
  }, [locate]);

  return (
    <>
      <S.Container className="location" onClick={handleRefresh}>
        <S.LocationIconWrapper className="location__icon">
          <MapPin
            size={27}
            color="#ff3e3a"
            weight="fill"
            className="pin__icon"
          />
        </S.LocationIconWrapper>
        <S.LocationTextWrapper className="location__text">
          {location.loaded ? address : <span>주소를 불러오고 있어요!</span>}
        </S.LocationTextWrapper>
        <ArrowCounterClockwise
          size={17}
          onClick={handleRefresh}
          style={{ cursor: 'pointer' }}
        />
      </S.Container>
    </>
  );
};

export default Location;
