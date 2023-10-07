import styled from 'styled-components';

export const Container = styled.div`
  .swiper-pagination {
    text-align: right !important;
  }

  .swiper-pagination-bullet-active {
    background: white !important;
  }

  .swiper-button-prev {
    color: #999999 !important;
  }

  .swiper-button-next {
    color: #999999 !important;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.4rem !important;
    font-weight: 600 !important;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  padding-top: 27%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: contain;
    opacity: 1;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;
