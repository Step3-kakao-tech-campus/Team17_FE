import styled from 'styled-components';

export const Container = styled.div`
  //컨테이너 전체
  border-radius: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  padding: 1rem 1rem 1rem 1rem; // 네모칸 안쪽 여백
  margin: 1rem 0.5rem; // 네모칸 바깥 여백
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); // 그림자

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
  }
`;

export const ProfileImgWrapper = styled.div`
  //강아지 이미지
  margin-right: 0.6rem;
`;

export const ListDogText = styled.span`
  font-size: 0.8rem;
  padding-right: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const ListTitle = styled.div`
  font-size: 0.8rem;
  /* font-family: 'Gowun'; */
`;

export const TextWrapper = styled.div`
  // 닉네임, 자격증, 경험 사이 간격
  line-height: 1.5rem;
`;
