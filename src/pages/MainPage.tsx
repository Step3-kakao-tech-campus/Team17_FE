import Location from "../components/molecules/Location";
import Carousel from "../components/molecules/Carousel";
import BottomNavBar from "../components/molecules/BottomNavBar";
import MainListTemplate from "../components/templates/MainListTemplate";

const MainPage = () => {
  return (
    <>
      <Location />
      <Carousel />
      <MainListTemplate />
      <BottomNavBar />
    </>
  );
}

export default MainPage;