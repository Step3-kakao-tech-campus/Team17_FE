import React from 'react';

type DateRangeProps = {
  startDate: string;
  endDate: string;
};

/**
 * ISO 8601형식의 start, end값을 받아 문자열 형태로 출력하는 함수
 * @param startDate : 산책시작시간
 * @param endDate : 산책종료시간
 * @returns 23.07.18 07:00 ~ 08:00의 형태로 반환
 */
export const formatDateRange = ({
  startDate,
  endDate,
}: DateRangeProps): string => {
  // ISO 8601 형식 =>  Date 객체로 파싱
  const startDateTime = new Date(startDate);
  const endDateTime = new Date(endDate);

  // 포맷
  const formattedStartDate = `${startDateTime.getFullYear() % 100}.${(
    startDateTime.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}.${startDateTime
    .getDate()
    .toString()
    .padStart(2, '0')} ${startDateTime
    .getHours()
    .toString()
    .padStart(2, '0')}:${startDateTime
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  const formattedEndDate = `${endDateTime
    .getHours()
    .toString()
    .padStart(2, '0')}:${endDateTime.getMinutes().toString().padStart(2, '0')}`;

  // 문자열로 반환
  return `${formattedStartDate} ~ ${formattedEndDate}`;
};
