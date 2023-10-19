import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGeolocation from '../../hooks/useGeolocation';

const KakaoMap = () => {
  const location = useGeolocation();
  const { lat, lng } = location.coordinates;

  return (
    <Map
      center={{ lat: lat, lng: lng }}
      style={{ width: '100vw', height: '100vh' }}
      level={1}
    >
      <MapMarker
        position={{ lat: lat, lng: lng }}
        image={{
          src: '/images/user_marker.png',
          size: { width: 25, height: 25 },
        }}
      >
        {/* <div style={{ color: '#000' }}>Hello World!</div> */}
      </MapMarker>
    </Map>
  );
};
export default KakaoMap;
