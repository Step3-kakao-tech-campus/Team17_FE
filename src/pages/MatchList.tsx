// import React from 'react'
import MatchListTemplate from '../components/templates/MatchListTemplate';
import BottomNavBar from '../components/molecules/BottomNavBar';
import ProfileBanner from '../components/molecules/ProfileBanner';

const MatchListPage = () => {
  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      <ProfileBanner />
      <MatchListTemplate />
      <BottomNavBar />
    </div>
  );
};

export default MatchListPage;
