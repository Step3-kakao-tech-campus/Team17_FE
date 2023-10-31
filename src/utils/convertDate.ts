export const convertDate = ({ startDate, endDate }: DateRangeProps): string => {
  const startDateTime = new Date(startDate);
  const endDateTime = new Date(endDate);

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const startDay = days[startDateTime.getDay()];
  const endDay = days[endDateTime.getDay()];

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
