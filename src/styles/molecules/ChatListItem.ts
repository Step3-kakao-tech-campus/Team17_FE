import styled from 'styled-components';

export const Container = styled.div`
  //컨테이너 전체
  border-radius: 20px;
  border: 2px solid #d6cfa5;

  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem 1rem;
  margin: 1rem 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // 그림자
`;

export const ProfileImgWrapper = styled.span`
  //강아지 이미지
  margin-right: 1rem;
`;

export const ListChatText = styled.span`
  //메시지 사이즈
  font-size: 0.8rem;
  white-space: nowrap;
`;

export const NameAndWalkTypeWrapper = styled.div`
  // 강아지 이름
  display: flex;
  font-size: 1rem;
  font-family: 'Gowun';
  width: 100%;
  justify-content: start;
  align-items: center;
  white-space: nowrap;

  & > span {
    // 산책 현황
    margin-left: 0.3rem;
    font-size: 0.75rem;
    color: #c5be91;
    white-space: nowrap;
  }
`;

export const TextWrapper = styled.div`
  // 이름, 메시지 사이 간격
  line-height: 1.9rem;
`;
