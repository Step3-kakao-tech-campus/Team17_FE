import styled from 'styled-components';
import Button from '../../components/atoms/Button';

export const Container = styled.div`
  z-index: 1200;
  position: absolute;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0px;
  display: flex;
  background-color: rgba(0, 0, 0, 71%);
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  max-width: 77vw;
  max-height: 75vh;
  box-shadow:
    0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: white;
  overflow: hidden;
  border-radius: 4px;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
  color: black;

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

  &::-webkit-scrollbar {
    display: none;
    visibility: hidden;
  }

  overflow-y: scroll !important;
`;

export const ModalHeader = styled.h1`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.2rem;
  color: black;
  font-family: 'Gowun';
  padding: 1rem;

  .modal__header-icon {
    cursor: pointer;
    padding-right: 0.5rem;
  }
`;

export const DogSizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;

export const DogTitle = styled.h2`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.9rem;
  padding: 0.2rem 1rem;

  & > span {
    margin-left: 0.5rem;
  }
`;

export const DogSizeContent = styled.span`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
`;

export const DogBreedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;

export const DogBreedContent = styled.span`
  padding: 0.5rem 1rem;
  align-items: center;

  .dog-breed__tag {
    margin-bottom: 0.6rem;
    margin-right: 0.6rem;
  }
`;

export const FilterAdapButton = styled(Button)`
  background-color: #a59d52;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 70vw;
  height: 2.3rem;
  border-radius: 2px;
  border-radius: 25px;
  margin: 0.5rem 3.5vw 1rem 3.5vw;

  &:focus {
    outline: none;
  }
`;
