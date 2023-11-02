import { useState } from 'react';
import * as S from './../../styles/organisms/PostGrid';
import ProfileBottomPost from '../molecules/ProfileBottomPost';
import { convertDate } from '../../utils/convertDate';
import { Plus } from '@phosphor-icons/react';

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
interface Post {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: notiDog[];
}
interface notiDog {
  breed: string;
  age: number;
  image: string;
}
type postProps = {
  notificationList: Post[];
  applicationList: Post[];
  reviewList: Post[];
};

const PostGrid = ({
  notificationList,
  applicationList,
  reviewList,
}: postProps) => {
  const [activeButton, setActiveButton] = useState<String>('notification');
  const applications = applicationList;
  const notifications = notificationList;
  const reviews = reviewList;
  const [postList, setPostList] = useState(notifications);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    if (button === 'notification') {
      setPostList(notifications);
    } else if (button === 'application') {
      setPostList(applications);
    } else if (button === 'review') {
      setPostList(reviews);
    }
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
        {/* 게시글 추가 페이지로 이동할 수 있게 */}
        {activeButton === 'notification' ? (
          <S.Button>
            <Plus size="32" />
          </S.Button>
        ) : (
          ''
        )}
        <S.List>
          {postList.map((post) => (
            <S.ListWrapper key={post.id}>
              <ProfileBottomPost
                breed={post.dog[0].breed}
                age={post.dog[0].age}
                title={post.title}
                src={post.dog[0].image}
                date={convertDate({
                  startDate: post.start,
                  endDate: post.end,
                })}
              />
            </S.ListWrapper>
          ))}
        </S.List>
      </S.ListContainer>
    </S.Container>
  );
};

export default PostGrid;
