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
  width: 4rem;
  height: 4rem;
  border: 1px solid lightgray;
  border-radius: 27px;
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
  scroll-behavior: smooth;
  overflow: auto;
  resize: none;
  color: black;
  font-family: 'gowundoum';
  &::placeholder {
    color: #7b7b7b;
    font-family: 'IBMPlexSansKR-Regular';
  }
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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem; // 지원 완료하기 버튼 높이
  background-color: #f6ba26;
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
  margin-top: 2rem;

  &:active {
    background-color: #eba059;
  }

  &:focus {
    outline: none;
  }
`;
