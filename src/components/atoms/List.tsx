import styled from 'styled-components';
import { CaretRight } from '@phosphor-icons/react';
import Image from './Image';
type ListProps = {
  breed?: string;
  age?: number;
  date?: string;
  title?: string;
  src: string;
};

const List = ({ breed, age, date, title, src }: ListProps) => {
  return (
    <Container>
      <PictureContainer>
        <Image src={src} alt="강아지사진" size="3.0"></Image>
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
    </Container>
  );
};

export default List;

const Container = styled.div`
  border-radius: 20px;
  height: 5rem;
  display: flex;
  background-color: #d6cfa5;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const PictureContainer = styled.div`
  flex: 1;
  width: 1rem;
  height: 1rem;
  margin: 10px 10px 10px 20px;
  /* margin: px; */
  /* text-align: center; */
`;

const StyleContent = styled.div`
  flex: 5;
  margin: 10px 0 10px 0;
  & > span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #ffffff;
  }
`;

const ArrowContent = styled.div`
  margin: 25px 0 25px 0;
  flex: 1;
  cursor: pointer;
`;

const StyleTitle = styled.div`
  & > span {
    font-weight: bold;
    font-size: 0.8rem;
    color: #000000;
  }
`;
