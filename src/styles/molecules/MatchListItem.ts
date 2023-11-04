import styled from 'styled-components';

export const Container = styled.div`
  //컨테이너 전체
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem 1rem 1rem 1rem; // 네모칸 안쪽 여백
  margin: 1rem 0.5rem; // 네모칸 바깥 여백
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); // 그림자

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
  }
`;

export const ButtonWrapper = styled.div`
  // 버튼들을 우측으로 정렬
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AcceptButton = styled.button`
  font-size: 0.8rem;
  color: black;
  background-color: #d6cfa5;
  border: none;
  border-radius: 1rem;
  margin-bottom: 0.15rem; /* 버튼 사이의 간격 조절 */
  cursor: pointer;
`;

export const RejectButton = styled.button`
  font-size: 0.8rem;
  color: red;
  background-color: #d6cfa5;
  border: none;
  border-radius: 1rem;
  margin-top: 0.15rem; /* 버튼 사이의 간격 조절 */
  cursor: pointer;
`;

export const ProfileImgWrapper = styled.div`
  //강아지 이미지
  margin-right: 0.6rem;
`;

export const InfoWrapper = styled.div`
  // 닉네임, 자격증, 경험을 묶는 div
  margin-right: 1.5rem;
`;

export const ListTitle = styled.div`
  font-size: 0.8rem;
`;

export const TextWrapper = styled.div`
  // 닉네임, 자격증, 경험 사이 간격
  line-height: 1.5rem;
`;
