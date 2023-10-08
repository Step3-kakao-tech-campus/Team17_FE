import styled from 'styled-components';

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
      <StyleGridContainer>
        <h1>Dogs</h1>
        <StyledDogsContainer>
          {dogs.map((dog) => (
            <div>{dog.image}</div>
          ))}
        </StyledDogsContainer>
      </StyleGridContainer>
    </>
  );
};

export default DogGrid;

const StyleGridContainer = styled.div`
  /* border: 1px solid; */
  margin: 4vh 2vw 2vh 2vw;
  & > h1 {
    font-size: 20px;
  }
`;

const StyledDogsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
