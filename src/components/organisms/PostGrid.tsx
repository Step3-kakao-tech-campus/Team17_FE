import { useState } from 'react';
import * as S from './../../styles/organisms/PostGrid';
import ProfileBottomPost from '../molecules/ProfileBottomPost';
import { convertDate } from '../../utils/convertDate';
import { Plus } from '@phosphor-icons/react';
import ProfileApplyPost from '../molecules/ProfileApplyPost';

// api/profile/notifications
// 산책시키기 => 공고글

// interface reviewProp {
//   id: number;
//   reviewContent: string;
// }

// type notification = {
//   id: number;
//   title: string;
//   start: string;
//   end: string;
//   dog: notiDog[];
// };

// interface applicationProp {
//   id: number;
//   aboutMe: string;
//   certification: string;
//   experience: string;
// }
interface notiDog {
  breed: string;
  age: number;
  image: string;
}

interface NotificationProps {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: notiDog;
}
interface ApplicationProps {
  id: number;
  aboutMe: string;
  certification: string;
  experience: string;
}
interface ReviewProps {
  id: number;
  reviewContent: string;
  reviewTime: string;
  writerImg: string;
}
type postProps = {
  notificationList: NotificationProps[] | null;
  applicationList: ApplicationProps[] | null;
  reviewList: ReviewProps[] | null;
};

const PostGrid = ({
  notificationList,
  applicationList,
  reviewList,
}: postProps) => {
  const [activeButton, setActiveButton] = useState<String>('notification');
  // const applications = applicationList;
  // TODO:: application, reviewdata는 목업데이터가 없어서 하드코딩
  // TODO :: 지원서, 리뷰 CSS 만들기
  const applications = [
    {
      id: 1,
      aboutMe: '강아지를 누구보다 소중하게!!',
      certification: '애견보호사 2급',
      experience: '애견유치원2년',
    },
    {
      id: 1,
      aboutMe: '귀여운 강아지가 너무 좋아요!!',
      certification: '애견보호사 1급',
      experience: '애견유치원4년',
    },
  ];
  // const reviews = reviewList;

  const reviews = [
    {
      id: 1,
      reviewContent: '이분 추천합니다!!',
      reviewTime: '2023-07-18T05:56:34.157+00:00',
      writerImg: 'httPl;~~',
    },
    {
      id: 1,
      reviewContent: '저 이분 추천해요!!!',
      reviewTime: '2023-07-18T05:56:34.157+00:00',
      writerImg: 'httPl;~~',
    },
  ];
  const notifications = notificationList;

  // const [postList, setPostList] = useState(notifications);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    // if (button === 'notification') {
    //   setPostList(notifications);
    // } else if (button === 'application') {
    //   setPostList(applications);
    // } else if (button === 'review') {
    //   setPostList(reviews);
    // }
  };
  return (
    <S.Container>
      <S.Banner>
        <button
          className={`button ${
            activeButton === 'notification' ? 'active' : ''
          }`}
          onClick={() => handleButtonClick('notification')}
        >
          산책시키기
        </button>
        <button
          className={`button ${activeButton === 'application' ? 'active' : ''}`}
          onClick={() => handleButtonClick('application')}
        >
          지원서
        </button>
        <button
          className={`button ${activeButton === 'review' ? 'active' : ''}`}
          onClick={() => handleButtonClick('review')}
        >
          리뷰
        </button>
      </S.Banner>
      <S.ListContainer>
        {/* TO DO :: 게시글 추가 페이지로 이동할 수 있게 */}
        {activeButton === 'notification' ? (
          <S.Button>
            <Plus size="32" />
          </S.Button>
        ) : (
          ''
        )}
        {notifications && activeButton === 'notification' ? (
          <S.List>
            {notifications.map((post) => (
              <S.ListWrapper key={post.id}>
                <ProfileBottomPost
                  breed={post.dog.breed}
                  age={post.dog.age}
                  title={post.title}
                  src={post.dog.image}
                  date={convertDate({
                    startDate: post.start,
                    endDate: post.end,
                  })}
                />
              </S.ListWrapper>
            ))}
          </S.List>
        ) : (
          ''
        )}
        {applications && activeButton === 'application' ? (
          <S.List>
            {applications.map((post) => (
              <S.ListWrapper key={post.id}>
                <ProfileApplyPost
                  aboutMe={post.aboutMe}
                  certification={post.certification}
                  experience={post.experience}
                />
              </S.ListWrapper>
            ))}
          </S.List>
        ) : (
          ''
        )}
      </S.ListContainer>
    </S.Container>
  );
};
export default PostGrid;
