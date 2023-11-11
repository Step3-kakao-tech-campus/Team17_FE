import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1200;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 16%;
  .backCursor {
    margin-top: 0.2rem;
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
    /* height: 35rem; */
  }
  transition: all 400ms ease-in-out 2s;
  width: 40rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  border: none;
  /* border-radius: 1rem; */
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const MainContainer = styled.div`
  margin-top: 1rem;
`;

export const SearchLocation = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
  /* margin-top: 1rem; */
  align-items: center;
  & > .maplocation {
    width: 100%;
  }

  & > span {
    font-size: 0.9rem;
    padding-right: 1rem;
    cursor: pointer;
  }
`;
export const Input = styled.input`
  border: none;
  margin-left: 0.4rem;
  text-align: start;
  color: black;

  & > .search {
    background-color: #f5f6f6;
  }

  &:focus {
    outline: none;
  }
`;

export const LocationResult = styled.div`
  overflow-y: auto;
  max-height: 20rem;
  color: black;
  & > .title {
    font-size: 0.9rem;
    font-family: 'Gowun';
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & > .addressContainer {
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e2e2e2;
    cursor: pointer;
  }

  & > .addressContainer > .place_name {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    padding: 0.4rem;
  }

  & > .addressContainer > .location {
    font-size: 0.9rem;
    padding: 0.4rem;
    padding-top: 0.1rem;
  }
`;

export const MyLocation = styled.span`
  display: flex;
  margin-top: 0.5rem;
  padding: 0.1rem 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f6f6;
  border-radius: 10px;
  height: 2rem;
  padding-left: 1rem;
`;
