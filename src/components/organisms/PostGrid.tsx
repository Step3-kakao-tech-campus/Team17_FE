import { useState } from 'react';
import * as S from './../../styles/organisms/PostGrid';
import ProfileBottomPost from '../molecules/ProfileBottomPost';
import { convertDate } from '../../utils/convertDate';
import { Plus } from '@phosphor-icons/react';

// api/profile/notifications
// 산책시키기 => 공고글
type DetailDog = {
  breed: string;
  age: number;
  image: string;
};
type Dogs = {
  id: number;
  image: string;
};
type Post = {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: DetailDog;
};
type postProps = {
  posts: {
    id: number;
    nickname: string;
    profile_img: string;
    profileContent: string;
    dog_bowl: number;
    dogCoin: number;
    dogs: Dogs[];
    notifications: Post[];
    application: Post[];
    review: Post[];
  };
};

const PostGrid = ({ posts }: postProps) => {
  const [activeButton, setActiveButton] = useState<String>('notification');
  const applications = posts.application;
  const notifications = posts.notifications;
  const reviews = posts.review;
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

        {postList.map((post) => (
          <ProfileBottomPost
            key={post.id}
            breed={post.dog.breed}
            age={post.dog.age}
            title={post.title}
            src={post.dog.image}
            date={convertDate({
              startDate: post.start,
              endDate: post.end,
            })}
          />
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default PostGrid;
