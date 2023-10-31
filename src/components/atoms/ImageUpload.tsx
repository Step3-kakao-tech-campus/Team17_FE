// import { useRef, useCallback } from 'react';

// const ImageUpload = () => {
//   const inputRef = useRef<HTMLInputElement | null>(null);

//   const onUploadImage = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       if (!e.target.files) {
//         return;
//       }
//       console.log(e.target.files[0].name);
//     },
//     [],
//   );

//   const onUploadImageClick = useCallback(() => {
//     if (!inputRef.current) {
//       return;
//     }
//     inputRef.current.click();
//   }, []);
//   return (
//     <input
//       type="file"
//       accept="image/*"
//       ref={inputRef}
//       onChange={onUploadImage}
//       onClick={onUploadImageClick}
//     ></input>
//   );
// }; // const plusDog = () => {
// //   postDog({
// //     // FIXME :: userid는 임의로 넣은 값, 수정필요
// //     userid: 1,
// //     image: dogProfile.image,
// //     name: dogProfile.name,
// //     sex: dogProfile.sex,
// //     breed: dogProfile.breed,
// //     specificity: dogProfile.specificity,
// //     age: dogProfile.age,
// //   })
// //     .then(() => {
// //       alert('반려견 등록이 완료되었습니다!');
// //     })
// //     .catch((err: { request: { response: string } }) => {
// //       console.log(err.request.response);
// //     });
// // };
