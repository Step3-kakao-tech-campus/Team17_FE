import { rest } from 'msw';
import notification from './notification.json';

type FiltersProps = {
  id: number;
  title: string;
  lng: number;
  lat: number;
  dog: {
    name: string;
    age: string;
    size: string;
    sex: string;
    breed: string;
    image: string;
  };
  dog_bowl: number;
};

const BASE_USL = import.meta.env.VITE_APP_BASE_URL;

export const getNotificationWidFilter = rest.get(
  `${BASE_USL}/api/home`,
  async (req, res, ctx) => {
    const sizes = req.url.searchParams.getAll('size');
    const breeds = req.url.searchParams.getAll('breed');

    // 필터 작업 수행
    let filteredData;
    if (sizes.length !== 0 || breeds.length !== 0) {
      filteredData = notification.response.notifications.filter(
        (item: FiltersProps) => {
          let passFilter = false;

          //각 조건을 확인하고 OR 연산으로 조합한다.
          if (sizes.length > 0 && sizes.includes(item.dog.size)) {
            passFilter = true;
          }
          if (breeds.length > 0 && breeds.includes(item.dog.breed)) {
            passFilter = true;
          }

          return passFilter;
        },
      );
    } else {
      filteredData = notification;
    }

    await sleep(200); // network delay 적용
    return res(ctx.status(200), ctx.json(filteredData));
  },
);

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
