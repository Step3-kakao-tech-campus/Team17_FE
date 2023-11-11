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
export const convertDate = ({ startDate, endDate }: DateRangeProps): string => {
  const startDateTime = new Date(startDate);
  const endDateTime = new Date(endDate);

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const startDay = days[startDateTime.getDay()];
  // const endDay = days[endDateTime.getDay()];

  const formattedStartDate = `${startDateTime.getFullYear()}.${(
    startDateTime.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}.${startDateTime
    .getDate()
    .toString()
    .padStart(2, '0')} ${startDay} ${startDateTime
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

  return `${formattedStartDate} ~ ${formattedEndDate}`;
};

export const convertDay = (isoDate: string): string => {
  const date = new Date(isoDate);
  const year = date.getFullYear().toString().substring(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${year}.${month}.${day} ${dayOfWeek} ${hours}:${minutes}`;
};
