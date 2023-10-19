import { instance } from './index';

type ReviewProps = {
  memberId: number;
  receiveMemberId: number;
  reviewContent: string;
  reviewEval: {
    eval1: boolean;
    eval2: boolean;
    eval3: boolean;
    eval4: boolean;
  };
  isReceiverDogOwner: boolean;
  dogBowl: number;
};

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const PostReview = (info: ReviewProps) => {
  return instance.post(`${BASE_URL}api/review`, info);
};
