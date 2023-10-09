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
  filters?: FiltersProps,
  pageParam?: Number,
) => {
  if (filters) {
    // 필터 처리된 데이터를 불러온다.
    let queryString = '';
    Object.keys(filters).map((key) => {
      if (filters.hasOwnProperty(key)) {
        const values = filters[key];
        values.forEach((value) => {
          queryString += `${key}=${value}&`;
        });
      }
    });

    if (pageParam) {
      return instance.get(`/home?${queryString}`, {
        params: {
          nextCursorRequest: pageParam,
        },
      });
    } else {
      return instance.get(`/home?${queryString}`);
    }
  } else {
    // 필터가 없는 경우 모든 공고글 리스트를 불러온다.
    if (pageParam) {
      return instance.get(`/home?size=false&breed=false`, {
        params: {
          nextCursorRequest: pageParam,
        },
      });
    } else {
      return instance.get(`/home?size=false&breed=false`);
    }
  }
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
  return instance.get(`/notification/${id}`);
};
