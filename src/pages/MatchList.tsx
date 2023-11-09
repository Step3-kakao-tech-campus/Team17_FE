// import React from 'react'
import MatchListTemplate from '../components/template/MatchListTemplate';
import BottomNavBar from '../components/molecules/BottomNavBar';
import ProfileBanner from '../components/molecules/ProfileBanner';

const MatchListPage = () => {
  return (
    <>
      <ProfileBanner isOwner={false} />
      <MatchListTemplate />
      <BottomNavBar />
    </>
  );
};

export default MatchListPage;
