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
  search: string,
  filters: FiltersProps,
  pageParam?: number,
) => {
  // 필터 처리된 데이터를 불러온다.
  const filterUrlTerm = filters.size
    .map((size, idx) => {
      if (idx === filters.size.length - 1) {
        return `size=${size}`;
      } else {
        return `size=${size}&`;
      }
    })
    .concat(
      filters.breed.map((breed, idx) => {
        if (idx === filters.breed.length - 1) {
          return `breed=${breed}`;
        } else {
          return `breed=${breed}&`;
        }
      }),
    );

  if (search) {
    filterUrlTerm.push(`&word=${search}`);

    return instance.get(`/search?${filterUrlTerm}`, {
      params: {
        nextCursorRequest: pageParam,
        word: search,
      },
    });
  } else {
    return instance.get(`/home?${filterUrlTerm}`, {
      params: {
        nextCursorRequest: pageParam,
      },
    });
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
