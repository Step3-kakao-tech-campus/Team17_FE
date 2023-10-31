import styled from 'styled-components';
import { CaretLeft, Circle } from '@phosphor-icons/react';
import useGeolocation from '../../hooks/useGeolocation';
import { useState, PropsWithChildren } from 'react';
import MapLocation from '../molecules/MapLocation';
import { kakaoSearch } from '../../utils/kakaoLocation';
// import Image from '../components/atoms/Image';
import * as S from '../../styles/molecules/LocationModal';
type ModalDefaultType = {
  onClickToggleModal: () => void;
};
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
export const LocationModal = ({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) => {
  const currentlocation = useGeolocation();
  const [address, setAddress] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [addressData, setAddressData] = useState<KakaoPropsArray | undefined>();
  const handleAddressClick = (selectedAddress: string) => {
    setSearchQuery(selectedAddress);
  };

  const handleOnBlur = async () => {
    const data = await kakaoSearch(searchQuery);
    setAddressData(data?.data.documents);
    console.log('data', addressData);
  };
  const handleInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  return (
    <S.ModalContainer>
      <S.DialogBox>
        <CaretLeft size={32} color="black" onClick={onClickToggleModal} />
        <S.MainContainer>
          <S.SearchLocation>
            <MapLocation
              location={currentlocation}
              address={address}
              setAddress={setAddress}
            />
            <S.MyLocation>
              <Circle size={8} fill="#F05423" weight="fill" />

              <S.Input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchQuery}
                onChange={handleInputChange}
                onBlur={handleOnBlur}
                style={{ backgroundColor: '#e2e2e2' }}
              />
            </S.MyLocation>
            <button onClick={handleOnBlur}>클릭</button>
          </S.SearchLocation>
          <S.LocationResult>
            <div className="title">장소결과</div>
            {addressData?.map((address) => (
              <div
                key={address.id}
                className="addressContainer"
                onClick={() => handleAddressClick(address.address_name)}
              >
                <div className="place_name">{address.place_name}</div>
                <div>{address.address_name}</div>
              </div>
            ))}
          </S.LocationResult>
        </S.MainContainer>
      </S.DialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
};
