import styled, { css } from 'styled-components';

export const Container = styled.div`
  //컨테이너 전체
  display: flex;
  /* justify-content: start;
  align-items: center; */
  padding: 1rem 1rem;
  cursor: pointer;
  margin-bottom: 0.6rem;
`;

export const ProfileImgWrapper = styled.span`
  //강아지 이미지
  color: black;
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  border: 1px solid lightgray;
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListChatText = styled.span`
  //메시지 사이즈
  font-size: 0.8rem;
  white-space: nowrap;
  color: #9a9595;
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

  .username {
    color: black;
    font-size: 1rem;
    margin-right: 1rem;
  }

  & > span {
    // 산책 현황
    font-size: 0.75rem;
    color: #f84514;
    white-space: nowrap;
  }

  .walking {
    margin-left: 0.3rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #01c522;
  }

  .wait {
    margin-left: 0.3rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #c6bebe;
  }
`;

export const TextWrapper = styled.div`
  // 이름, 메시지 사이 간격
  line-height: 1.7rem;
`;

export const TextContent = styled.div`
  ${(props) =>
    props.className === 'yours' &&
    css`
      background-color: 'white';
      color: #000;
    `}
`;

export const MyChatTextWrapper = styled.div`
  position: absolute;
  right: 0;
`;

export const ChatTextWrapper = styled.div`
  border: 1px solid rgba(246, 186, 38, 50%);
  border-radius: 5px;
  height: 2rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.className === 'mine' &&
    css`
      background-color: rgba(246, 186, 38, 50%);
      color: #000;

      @media screen and (max-width: 768px) {
        margin-right: 1.3rem;
      }
    `}
  ${(props) =>
    props.className === 'yours' &&
    css`
      background-color: white;
      color: #000;
    `};
`;
