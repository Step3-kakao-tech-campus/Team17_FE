import styled from 'styled-components';
import Image from '../../components/atoms/Image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .dog__walking {
    font-family: 'Gowun';
  }
`;

export const Title = styled.h2`
  margin: 0.5rem;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  color: black;
  font-family: 'Gowun';
  border-bottom: 1px solid #dadada;
`;

export const Profile = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 1rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid #dadada;
`;

export const ProfileWrapper = styled.span`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  & > .dog__name {
    font-size: 1rem;
  }
`;

export const ProfileImage = styled(Image)`
  margin: 0 1rem;
`;

export const CoinWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f84514;
  font-size: 0.9rem;

  & > .paw__icon {
    margin-right: 1rem;
    margin-left: 0.2rem;
  }

  & > .dog__coin {
    color: black;
    padding-right: 0.5rem;
  }
`;

export const WalkingWrapper = styled.div`
  border-bottom: 1px solid #dadada;
  padding: 1rem 0.5rem;
  font-size: 0.9rem;
  color: black;
`;

export const WalkingInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 0;
`;

export const PayServiceWrapper = styled.div`
  padding: 1rem 0.5rem;
  font-size: 0.9rem;
  color: black;
`;

export const PayServiceInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 0;

  .total__price {
    color: #f3764f;
  }
`;

export const ServicePolicy = styled.div`
  cursor: pointer;
  padding: 0.7rem 0.5rem;
  font-size: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #f7f7f7;
  color: black;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;

  & > .check__icon {
    padding-bottom: 0.2rem;
    margin-right: 0.6rem;
  }
`;

export const ButtonWrapper = styled.div`
  border: none;
  color: white;
  font-size: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  margin: 0.5rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PayButton = styled.button`
  width: 95%;
  margin-top: 1rem;
  background-color: #f6ba26;
  border-radius: 20px;
  color: white;

  &:focus {
    outline: none;
    background-color: #eba059;
  }
`;

export const BottomContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
