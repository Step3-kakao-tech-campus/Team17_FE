import React from 'react';
import styled from 'styled-components';
import { CaretRight } from '@phosphor-icons/react';
import Photo from './Photo';
type ListProps = {
  className?: string;
  breed?: string;
  age?: number;
  date?: string;
  title?: string;
};
{
  /* <img src="./images/logo.png" alt="check" />
<div>클래스 : {className}</div>
<div>품종 : {breed}</div>
<div>나이 : {age}</div>
<div>날짜 : {date}</div>
<div>내용 : {title}</div> */
}
const List = ({ className, breed, age, date, title }: ListProps) => {
  return (
    <StyleContainer>
      <PictureContainer>
        <Photo src="./images/logo.png" alt="강아지사진"></Photo>
        {/* <img  /> */}
      </PictureContainer>
      <StyleContent>
        <StyleTitle>
          <span>{breed} </span>
          <span>{age}살 </span>
          <span>{date} </span>
        </StyleTitle>
        <span> {title}</span>
      </StyleContent>
      <ArrowContent>
        <CaretRight color="white" size={30} />
      </ArrowContent>
    </StyleContainer>
  );
};

export default List;

const StyleContainer = styled.div`
  margin-top: 15px;
  border-radius: 20px;
  height: 80px;
  display: flex;
  background-color: #d6cfa5;
  justify-content: space-between;
`;

const PictureContainer = styled.div`
  flex: 1;
  width: 60px;
  height: 60px;
  margin: 10px 10px 10px 20px;
  /* margin: px; */
  /* text-align: center; */
`;

const StyleContent = styled.div`
  flex: 5;
  margin: 10px 0 10px 0;
  & > span {
    display: block;
    margin-top: 10px;
    font-size: 24px;
    color: #ffffff;
  }
`;

const ArrowContent = styled.div`
  margin: 25px 0 25px 0;
  flex: 1;
`;

const StyleTitle = styled.div`
  & > span {
    font-weight: bold;
  }
`;
const StyleMessage = styled.div``;
