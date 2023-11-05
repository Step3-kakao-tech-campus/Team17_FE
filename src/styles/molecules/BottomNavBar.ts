import styled from 'styled-components';

export const Container = styled.div`
  border-top: 0.5px solid #d9d9d9;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.6rem 0;
  z-index: 100;
  background-color: white;
  height: 4rem;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .active {
    color: #a59d52;
  }
  box-sizing: border-box;
`;

export const NavItemWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BottomNavText = styled.h1`
  display: inline;
  font-size: 0.8rem;
  color: #999999;
  padding-top: 0.2rem;
`;
