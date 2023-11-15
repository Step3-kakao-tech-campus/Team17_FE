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
  /* left: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 15rem; */
  height: 5rem;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .send {
    margin-right: 1rem;
  }
`;

export const Input = styled.input`
  font-size: 1.1rem;
  margin-right: 0.7rem;
  padding: 0.7rem 1rem 0.7rem 1rem; // 수정해야함 패딩 ㅎㅎ..
  width: 90%;
  background-color: white;
  border-color: lightgray;
  font-family: 'gowun';
`;
