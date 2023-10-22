import styled from 'styled-components';
import { CaretLeft, Circle } from '@phosphor-icons/react';
import useGeolocation from '../hooks/useGeolocation';
import { useState } from 'react';
import MapLocation from '../components/molecules/MapLocation';
import { kakaoSearch } from '../utils/kakaoLocation';
import Image from '../components/atoms/Image';

interface kakaoProps {
  id?: string;
  place_name?: string;
  category_name?: string;
  category_group_code?: string;
  category_group_name?: string;
  phone?: string;
  address_name?: string;
  road_address_name?: string;
  x?: string;
  y?: string;
  place_url?: string;
  distance?: string;
}
type KakaoPropsArray = kakaoProps[];
export const Map = () => {
  const currentlocation = useGeolocation();
  const [address, setAddress] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [addressData, setAddressData] = useState<KakaoPropsArray | undefined>();

  const handleOnBlur = async () => {
    const data = await kakaoSearch(searchQuery);
    setAddressData(data?.data.documents);
    console.log('data', addressData);
  };
  const handleInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  return (
    <Container>
      <MainContainer>
        <CaretLeft size={32} />
        <SearchLocation>
          <MapLocation
            location={currentlocation}
            address={address}
            setAddress={setAddress}
          />
          <Input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchQuery}
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            style={{ backgroundColor: '#f5f6f6' }}
          />
          <button onClick={handleOnBlur}>클릭</button>
        </SearchLocation>
        <LocationResult>
          <div className="title">장소결과</div>
          {addressData?.map((address) => (
            <div key={address.id} className="addressContainer">
              <div className="place_name">{address.place_name}</div>
              <div>{address.address_name}</div>
            </div>
          ))}
        </LocationResult>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #e2e2e2;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 78vw;
    margin: 0 10vw;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
const MainContainer = styled.div`
  margin: 1rem 2rem;
`;

const SearchLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
`;
const Input = styled.input`
  height: 2rem;
  border-radius: 10px;
  width: 80%;
  margin-bottom: 0.2rem;
  border: none;
  text-align: center;
  & > .search {
    background-color: #f5f6f6;
  }
`;

const LocationResult = styled.div`
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
  }

  & > .addressContainer > .place_name {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
`;
