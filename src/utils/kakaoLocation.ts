import axios from 'axios';

/**
 * 카카오지도 API로 현재 유저 좌표를 동단위로 변환
 * @param position coordinates: {lat: number, lng: number}
 */
const kakaoLocation = async (position: { lat: number; lng: number }) => {
  const x = position.lng;
  const y = position.lat;
  const apiKey = import.meta.env.VITE_REACT_APP_KAKAO_REST_API_KEY;

  if (x && y) {
    try {
      return await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`,
        {
          headers: {
            Authorization: `KakaoAK ${apiKey}`,
          },
        },
      );
    } catch (_err) {}
  }
};

export default kakaoLocation;
/**
 * 키워드를 바탕으로, 장소를 배열로 보여주는 API
 * @param searchQuery 검색하는 keyword
 * @returns
 */
export const kakaoSearch = async (searchQuery: string) => {
  const apiKey = import.meta.env.VITE_REACT_APP_KAKAO_REST_API_KEY;
  try {
    return await axios.get(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${searchQuery}`,
      {
        headers: {
          Authorization: `KakaoAK ${apiKey}`,
        },
      },
    );
  } catch (_error) {}
};
