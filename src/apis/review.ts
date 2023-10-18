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

export const setReview = (info: ReviewProps) => {
  return instance.post('/review', {
    params: {
      memberId: info.memberId,
      receiveMemberId: info.receiveMemberId,
      reviewContent: info.reviewContent,
      reviewEval: info.reviewEval,
      isReceiverDogOwner: info.isReceiverDogOwner,
      dogBowl: info.dogBowl,
    },
  });
};
