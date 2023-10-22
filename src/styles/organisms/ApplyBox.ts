import styled from 'styled-components';
import Image from '../../components/atoms/Image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 83%;
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
