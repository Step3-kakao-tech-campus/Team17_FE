import styled from 'styled-components';
import Image from '../atoms/Image';
import { Plus } from '@phosphor-icons/react';
// "dogs": [
//   {
//     "id": 1,
//      "image" : "basicProfile_47838475947393908393.png",
//   },
//   {
//     "id": 2,
//      "image" : "basicProfile_47838475947393908393.png",
//   },
//   {
//     "id": 3,
//      "image" : "basicProfile_47838475947393908393.png",
//   },
// ],

const DogGrid = ({ dogs }) => {
  const dogdata = dogs;
  return (
    <>
      <Container>
        <h1>Dogs</h1>
        <DogsContainer>
          <button>
            <Plus size="32" />
          </button>
          {dogs.map((dog) => (
            <Image src={dog.image} alt="강아지사진" size="4" />
          ))}
        </DogsContainer>
      </Container>
    </>
  );
};

export default DogGrid;

const Container = styled.div`
  margin: 0 0 1rem 1rem;

  & > h1 {
    font-size: 1.5rem;
  }
`;

const DogsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 20px;
  cursor: pointer;
`;
