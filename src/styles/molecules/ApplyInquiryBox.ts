import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 83%;
`;

export const Title = styled.h2`
  margin: 0.5rem 0.5rem 0.1rem;
  padding: 0.5rem 0;
  color: black;
  border-bottom: 1px solid #dadada;
  font-family: 'Gowun';

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dadada;
`;

export const ProfileWrapper = styled.span`
  display: flex;
  align-items: center;
  color: black;
  justify-content: start;
  & > .apply__name {
    // 지원자 이름
    font-size: 1.1rem;
    padding: 1rem 1.2rem;
  }
  padding: 0rem 0.8rem;
  border-bottom: 1px solid #dadada;
`;

export const ProfileImgWrapper = styled.div`
  //강아지 이미지
  margin: 0.8rem 0.6rem;
`;

export const IntroWrapper = styled.div`
  margin: 1rem 0.7rem;
  background-color: #f7f7f7;
  height: 16vh;
`;

export const ApplyWrapper = styled.div`
  margin: 1rem 0.7rem;
  background-color: #f7f7f7;
  height: 12vh;
`;

export const border = styled.div`
  border-bottom: 1px solid #dadada;
`;

export const ApplyTitle = styled.div`
  margin: 0.5rem 0;
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 1.1rem;
  color: black;
`;

export const ApplyContent = styled.textarea`
  border: none;
  width: 90%;
  height: 40%;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background-color: #f7f7f7;
  resize: none;
  color: black;
  font-family: 'Gowun';
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    visibility: hidden;
  }

  pointer-events: none; // 글 못쓰게 막음
`;

export const ButtonWrapper = styled.div`
  border: none;
  color: white;
  font-size: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  margin: 0.5rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 95%;
  height: 5vh; // 지원 완료하기 버튼 높이
  background-color: #a59d52;
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
  margin-top: 0%.5;

  &:focus {
    outline: none;
    background-color: #eba059;
  }
`;
