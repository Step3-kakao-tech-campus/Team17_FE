import { instance } from './index';
/*
  filters = {
    size: ['소형견', '중형견'],
    breed: ['말티즈', '푸들']
  }
*/
type FiltersProps = {
  size: Array<string>;
  breed: Array<string>;
  [key: string]: Array<string>;
};

/**
 * 사용자가 메인 화면에 접속했을 때 받아오는 공고글 리스트 api
 * @param filters
 * @returns notification list data
 */
export const fetchNotifications = (
  debouncedSearch: string,
  filters: FiltersProps,
  pageParam: number = 0,
  lat: number,
  lng: number,
) => {
  // 필터 처리된 데이터를 불러온다.
  const big = filters.size.join(',');
  const breed = filters.breed.join(',');

  return instance.get('api/home', {
    params: {
      key: pageParam || null,
      big: big || null,
      breed: breed || null,
      word: debouncedSearch || null,
      latitude: lat,
      longitude: lng,
    },
  });
};

/**
 * 공고글 상세 조회 api
 * @param id
 * @returns notification detail data
 */
export const getNotificationById = (id: Number) => {
  if (!id) {
    throw Error('id가 없습니다.');
  }
  return instance.get(`api/notification/${id}`);
};

type postNotiProp = {
  data: {
    title: string;
    dogId: number;
    lat: number;
    lng: number;
    start: string;
    end: string;
    coin: number;
    significant: string;
    userId?: number;
  };
};
/**
 * 공고글 작성하기
 * @param data
 * @returns
 */
export const postNotification = ({ data }: postNotiProp) => {
  return instance.post(`api/notification`, data);
};
