import { MapPin, ArrowCounterClockwise } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/Location';
import { useCallback, useEffect, useState } from 'react';
import kakaoLocation from '../../utils/kakaoLocation';
import React from 'react';

type LocationProps = {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  location: {
    loaded: boolean;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
};

const Location = ({ location, address, setAddress }: LocationProps) => {
  const [locate, setLocate] = useState({
    lat: location.coordinates.lat,
    lng: location.coordinates.lng,
  });

  const handleRefresh = useCallback(() => {
    // 사용자 위치 재설정
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocate({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        // 사용자 위치 geoLocation API 사용은 https에서만 적용 가능
        alert('위치를 불러오는데 실패하였습니다.');
      },
    );
  }, []);

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
        <ArrowCounterClockwise size={17} style={{ cursor: 'pointer' }} />
      </S.Container>
    </>
  );
};

export default React.memo(Location);
