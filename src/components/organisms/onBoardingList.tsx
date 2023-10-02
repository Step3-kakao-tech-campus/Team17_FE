import OnBoarding from '../molecules/OnBoarding';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onBoardingList = () => {
  const innerText1 = '클릭 한 번으로<br />반려동물 산책을 신청해보세요!';
  const innerText2 = '수락을 누르면<br />매칭이 성사됩니다!';
  const innerText3 = '반려동물을 <br /> 안전하게 산책시키세요!';

  const parts1 = innerText1.split('<br />');
  const parts2 = innerText2.split('<br />');
  const parts3 = innerText3.split('<br />');

  const onboarding1 = () => {
    return (
      <OnBoarding innerTextTop={parts1[0]} innerTextBottom={parts1[1]}>
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
      </OnBoarding>
    );
  };

  const onboarding2 = () => {
    return (
      <OnBoarding innerTextTop={parts2[0]} innerTextBottom={parts2[1]}>
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
      </OnBoarding>
    );
  };

  const onboarding3 = () => {
    return (
      <OnBoarding
        innerTextTop={parts3[0]}
        innerTextBottom={parts3[1]}
        className="last__onboarding"
      >
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
      </OnBoarding>
    );
  };

  return (
    <main>
      <Swiper>
        <SwiperSlide>{onboarding1()}</SwiperSlide>
        <SwiperSlide>{onboarding2()}</SwiperSlide>
        <SwiperSlide>{onboarding3()}</SwiperSlide>
      </Swiper>
    </main>
  );
};

export default onBoardingList;
