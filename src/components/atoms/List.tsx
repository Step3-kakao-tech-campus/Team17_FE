import React from 'react';

type ListProps = {
  className: string;
  breed: string;
  age: number;
  date: string;
  title: string;
};

const List = ({ className, breed, age, date, title }: ListProps) => {
  return (
    <>
      <img src="./images/logo.png" alt="check" />
      <div>클래스 : {className}</div>
      <div>품종 : {breed}</div>
      <div>나이 : {age}</div>
      <div>날짜 : {date}</div>
      <div>내용 : {title}</div>
    </>
  );
};

export default List;
