import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import * as S from '../../styles/molecules/Carousel';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <S.Container>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
				navigation
				pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <S.Wrap>
            <img src="/images/main-carousel9.jpg" alt="캐러셀1" />
          </S.Wrap>
        </SwiperSlide>
        <SwiperSlide>
          <S.Wrap>
            <img src="/images/main-carousel10.jpg" alt="캐러셀1" />
          </S.Wrap>
        </SwiperSlide>
        <SwiperSlide>
          <S.Wrap>
            <img src="/images/main-carousel12.png" alt="캐러셀1" />
          </S.Wrap>
        </SwiperSlide>
      </Swiper>
    </S.Container>
  )
}

export default Carousel