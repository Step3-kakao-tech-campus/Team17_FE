import styled from 'styled-components';

export const Container = styled.div`
  //컨테이너 전체
  border-radius: 20px;
  border: 2px solid #d6cfa5;

  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem 4rem 1rem 1rem;
  margin: 1rem 1rem;
`;

export const ProfileImgWrapper = styled.span`
  //강아지 이미지
  margin-right: 1rem;
`;

export const ListChatText = styled.span`
  //메시지 사이즈
  font-size: 0.8rem;
`;

export const Dogname = styled.div`
  // 강아지 이름
  display: flex;
  font-size: 1rem;
  font-family: 'Gowun';
  width: 100%;
  justify-content: start;
  align-items: center;

  & > span {
    // 산책 현황 보기
    margin-left: 0.3rem;
    font-size: 0.75rem;
    color: red;
  }
`;

export const TextWrapper = styled.div`
  // 이름, 메시지 사이 간격
  line-height: 1.9rem;
`;
