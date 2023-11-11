import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 아래에서 위로 정렬 */

  @media screen and (max-width: 768px) {
    padding-left: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    margin-left: 1rem;
  }

  & > .chat-page {
    margin-top: 6rem;
    /* display: flex;
    justify-content: center; */
  }
  ul.messageArea {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    max-height: 50rem; /* 원하는 높이로 설정 */
    /* flex-direction: column-reverse; 이 부분을 제거하고 아래 코드를 추가 */
    display: flex;
    flex-direction: column;
  }
  ul.messageArea .chat-message {
    order: -1; /* 새로운 메시지가 위로 올라가도록 설정 */
  }

  & > .chat-page > .messageArea > .chat-message {
    display: flex;
    flex-direction: column;
  }
  & > .chat-page > .messageArea > .chat-message > div {
    text-align: end;
    /* background-color: #a59d52; */
  }
  & > .chat-page > .messageArea > .chat-message > p {
    text-align: start;
  }
`;
