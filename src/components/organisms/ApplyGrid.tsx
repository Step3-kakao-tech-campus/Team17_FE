import React from 'react';
import { convertDate } from '../../utils/convertDate';
import List from '../atoms/List';

// 지원서
type ApplyProps = {
  className: string;
};

// const data_response = {
//         "id": 1,
//         "nickname": "Kevin",
//         "profileContent": "안녕하세요~",
//         "dog_bowl": 50,
//         "dogs": [
// 									{
// 										"id": 1,
// 	 									"image" : "basicProfile_47838475947393908393.png",
// 									},
// 									{
// 										"id": 2,
// 	 									"image" : "basicProfile_47838475947393908393.png",
// 									},
// 									{
// 										"id": 3,
// 	 									"image" : "basicProfile_47838475947393908393.png",
// 									},
// 								],
// 					"application": [
// 									{
// 										"id": 1,
// 	 									"title" : "시바견 3살 지원합니다",
// 								    "start": "2023-07-18T05:56:34.157+00:00",
// 							      "end": "2023-07-18T07:56:34.157+00:00",
// 										"dog": {
// 												"breed" : "시바견",
// 												"age" : 3,
// 			 									"image" : "basicProfile_47838475947393908393.png",
// 												},
// 									},
// 									{
// 										"id": 2,
// 	 									"title" : "저는 프로 산책러입니다.",
// 								    "start": "2023-07-18T05:56:34.157+00:00",
// 							      "end": "2023-07-18T07:56:34.157+00:00",
// 										"dog": {
// 												"breed" : "믹스견",
// 												"age" : 7,
// 			 									"image" : "basicProfile_47838475947393908393.png",
// 												},
// 									},
// 								],
//     }
const ApplyGrid = ({ className }: ApplyProps) => {
  const breed: string = '시바견';
  const age: number = 3;
  const startDate = '2023-07-18T05:56:34.157+00:00';
  const endDate = '2023-07-18T07:56:34.157+00:00';
  const date: string = convertDate({ startDate, endDate });
  const title: string = '귀여운 복슬이 산책시키실 분';
  return (
    <div>
      <List
        className="apply"
        breed={breed}
        age={age}
        date={date}
        title={title}
      />
    </div>
  );
};

export default ApplyGrid;
