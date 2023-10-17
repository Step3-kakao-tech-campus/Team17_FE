import styled from 'styled-components';
import Image from '../../components/atoms/Image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 83%;
`;

export const Title = styled.h2`
  margin: 0.5rem;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  color: black;
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
  color: #a59d52;
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
  padding: 1rem 0.5rem;
  font-size: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #f7f7f7;
  color: black;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 0.9rem;

  & > .check__icon {
    padding-bottom: 0.2rem;
    margin-right: 0.6rem;
  }
`;

export const PayButton = styled.button`
  width: 95%;
  margin-top: 1.5rem;
  background-color: #a59d52;
  border-radius: 20px;
  color: white;
  position: absolute;
  bottom: 0;
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    background-color: #eba059;
  }
`;
