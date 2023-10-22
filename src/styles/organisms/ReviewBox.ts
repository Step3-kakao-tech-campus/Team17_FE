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
  justify-content: start;
  & > .dog__name {
    font-size: 1rem;
  }
  padding: 1rem 0;
  border-bottom: 1px solid #dadada;
`;

export const ProfileImage = styled(Image)`
  margin: 0 1rem;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  padding: 1rem 0;
`;
