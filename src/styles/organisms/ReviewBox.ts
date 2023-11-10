import styled from 'styled-components';
import Image from '../../components/atoms/Image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  & > .wrapper {
    height: 100%;
  }
`;

export const Title = styled.h2`
  margin: 0.5rem;
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
  margin-top: 1rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid #dadada;
`;

export const ProfileWrapper = styled.span`
  display: flex;
  align-items: center;
  color: black;
  justify-content: start;
  & > .dog__name {
    font-size: 1rem;
  }
  padding: 1rem 0;
  border-bottom: 1px solid #dadada;
`;

export const ProfileImage = styled(Image)`
  margin: 0 1rem;
`;

export const CheckboxLabelWrapper = styled.div`
  display: flex;
`;

export const CheckboxTable = styled.table`
  margin: 0.5rem auto;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  color: black;
  white-space: pre;

  @media screen and (min-width: 810px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CheckboxTr = styled.tr`
  line-height: 1.4rem;

  & > td {
    @media screen and (min-width: 768px) {
      white-space: nowrap;
    }
  }
`;

export const CheckboxLabel = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ReviewWrapper = styled.div`
  margin: 0.5rem 0.7rem;
  background-color: #f7f7f7;
  height: 37vh;
`;

export const ReviewTitle = styled.div`
  margin: 0.5rem 0;
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 1.1rem;
  color: black;
`;

export const ReviewContent = styled.textarea`
  border: none;
  width: 80%;
  height: 70%;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  overflow: auto;
  scroll-behavior: smooth;
  background-color: #f7f7f7;
  resize: none;
  color: black;
  &::placeholder {
    color: #7b7b7b;
    font-family: 'IBMPlexSansKR-Regular';
  }
  font-family: 'IBMPlexSansKR-Regular';

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;

export const ReviewSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
  margin-top: 1rem;

  & > span {
    font-size: 0.8rem;
    white-space: nowrap;
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ReviewBowl = styled.span`
  .dog__bowl {
    padding: 0 0.3rem;
  }
  color: #ff6060;
  font-family: 'Gowun';
`;

export const ReviewSliderTitle = styled.span`
  white-space: nowrap;
  padding: 0 0.5rem;
  color: black;
  font-family: 'Gowun';
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
  background-color: #f6ba26;
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #eba059;
  }
`;

export const BottomContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
