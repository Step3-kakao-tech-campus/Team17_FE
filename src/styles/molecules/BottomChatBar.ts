// import styled from 'styled-components';

// export const Form = styled.form`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   padding: 1rem;
//   z-index: 100;
//   height: 5rem;

//   @media screen and (min-width: 768px) {
//     width: 80%;
//     margin: 0 10%;
//   }

//   @media screen and (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const Input = styled.input`
//   margin-right: 1rem;
//   padding: 1rem 1.5rem 1rem 1.5rem; // 수정해야함 패딩 ㅎㅎ..
//   width: 30%;
//   background-color: #d6cfa5;
//   border-radius: 20px;
//   border-color: transparent;
// `;

import styled from 'styled-components';

export const Form = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15rem;
  height: 7rem;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 10%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  margin-right: 1rem;
  padding: 1rem 1.5rem 1rem 1.5rem; // 수정해야함 패딩 ㅎㅎ..
  width: 100%;
  background-color: #d6cfa5;
  border-radius: 20px;
  border-color: transparent;
`;
