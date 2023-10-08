import { Swiper, SwiperSlide } from 'swiper/react';
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
            <a
              href="https://www.knrc.co.kr/shop/list.php?dog_or_cat=%EA%B0%95%EC%95%84%EC%A7%80"
              target="_blank"
            >
              <img src="/images/main-carousel9.jpg" alt="캐러셀1" />
            </a>
          </S.Wrap>
        </SwiperSlide>
        <SwiperSlide>
          <S.Wrap>
            <a
              href="https://www.knrc.co.kr/shop/list.php?dog_or_cat=%EA%B0%95%EC%95%84%EC%A7%80"
              target="_blank"
            >
              <img src="/images/main-carousel10.jpg" alt="캐러셀1" />
            </a>
          </S.Wrap>
        </SwiperSlide>
        <SwiperSlide>
          <S.Wrap>
            <a
              href="https://m.wooof.co.kr/product/detail.html?product_no=16711&cate_no=0&display_group=1"
              target="_blank"
            >
              <img src="/images/main-carousel12.png" alt="캐러셀1" />
            </a>
          </S.Wrap>
        </SwiperSlide>
      </Swiper>
    </S.Container>
  );
};

export default Carousel;
