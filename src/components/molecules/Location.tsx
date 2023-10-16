import { MapPin, ArrowCounterClockwise } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/Location';

const Location = () => {
  const handleRefresh = () => {
    // 새로고침 혹은 사용자 위치 재설정
    window.location.reload();
  };

  return (
    <>
      <S.Container className="location">
        <S.LocationIconWrapper className="location__icon">
          <MapPin
            size={27}
            color="#ff3e3a"
            weight="fill"
            className="pin__icon"
          />
        </S.LocationIconWrapper>
        <S.LocationTextWrapper className="location__text">
          광주 북구 용봉동
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
