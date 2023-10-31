import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1200;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 3rem;
  @media screen and (max-width: 768px) {
    width: 20rem;
    /* height: 35rem; */
  }
  transition: all 400ms ease-in-out 2s;
  width: 40rem;
  /* height: 35rem; */
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
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
  margin: 1rem 2rem;
`;

export const SearchLocation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin-top: 1rem; */
  align-items: center;
  & > .maplocation {
    width: 100%;
  }
`;
export const Input = styled.input`
  border: none;
  text-align: center;
  color: black;
  margin-left: 1rem;
  & > .search {
    background-color: #f5f6f6;
  }
`;

export const LocationResult = styled.div`
  overflow-y: auto;
  max-height: 20rem;
  color: black;
  & > .title {
    font-size: 1.4rem;
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
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
`;

export const MyLocation = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  background-color: #e2e2e2;
  border-radius: 10px;
  height: 2rem;
  padding-left: 2rem;
`;
