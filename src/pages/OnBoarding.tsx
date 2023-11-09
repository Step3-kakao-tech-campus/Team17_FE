import Board from '../components/molecules/Board';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Button from '../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/molecules/OnBoarding';
import { useCallback } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

const OnBoarding = () => {
  const innerText1 = ['클릭 한 번으로', '반려동물 산책을 신청해보세요!'];
  const innerText2 = ['수락을 누르면', '매칭이 성사됩니다!'];
  const innerText3 = ['반려동물을', '안전하게 산책시키세요!'];

  const navigate = useNavigate();

  const onboarding1 = useCallback(() => {
    return (
      <Board innerTextTop={innerText1[0]} innerTextBottom={innerText1[1]}>
        <img src="/images/cloud.png" alt="cloud" className="image__cloud" />
        <div>
          <img
            src="/images/onboard_dog.png"
            alt="onboard dog"
            className="image__dog"
          />
          <img
            src="/images/onboard_location.png"
            alt="onboard image location pin"
            className="image__pin"
          />
        </div>
      </Board>
    );
  }, []);

  const onboarding2 = useCallback(() => {
    return (
      <Board innerTextTop={innerText2[0]} innerTextBottom={innerText2[1]}>
        <img src="/images/cloud.png" alt="cloud" className="image__cloud" />
        <div>
          <img
            src="/images/onboard_tree.png"
            alt="onboard image tree"
            className="image__tree"
          />
          <img
            src="/images/onboard_big_paw.png"
            alt="onboard image big paw"
            className="image__big-paw"
          />
          <img
            src="/images/onboard_heart.png"
            alt="onboard image heart"
            className="image__heart"
          />
        </div>
      </Board>
    );
  }, []);

  const onboarding3 = useCallback(() => {
    return (
      <Board innerTextTop={innerText3[0]} innerTextBottom={innerText3[1]}>
        <img src="/images/cloud.png" alt="cloud" className="image__cloud" />
        <img
          src="/images/onboard_location2.png"
          alt="onboard image location pin"
          className="image__pin2"
        />
        <div>
          <img
            src="/images/onboard_bench.png"
            alt="onboard image bench"
            className="image__bench"
          />

          <img
            src="/images/onboard_walking.png"
            alt="onboard image walking"
            className="image__walking"
          />
        </div>
      </Board>
    );
  }, []);

  return (
    <S.Container>
      <Swiper
        style={{ width: '100vw', height: '87vh' }}
        className="my-swiper"
        modules={[Pagination]}
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>{onboarding1}</SwiperSlide>
        <SwiperSlide>{onboarding2}</SwiperSlide>
        <SwiperSlide>{onboarding3}</SwiperSlide>
      </Swiper>
      <Button
        className="onboard__button"
        onClick={() => {
          navigate('/signin');
        }}
      >
        로그인하기
      </Button>
    </S.Container>
  );
};

export default OnBoarding;
