export const getWeekStartDate = date => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const previousWeek = currentTime => {
  const dateCopy = currentTime;
  const monday = new Date(dateCopy.setDate(currentTime.getDate() - 7));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const nextWeek = currentTime => {
  const dateCopy = currentTime;
  const monday = new Date(dateCopy.setDate(currentTime.getDate() + 7));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = startDate => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const countEventDates = (date, startTime, endTime) => {
  const dateParts = date.split('-');
  const startTimeParts = startTime.split(':');
  const endTimeParts = endTime.split(':');

  const dateFrom = new Date(
    dateParts[0],
    dateParts[1] - 1,
    dateParts[2],
    startTimeParts[0],
    startTimeParts[1],
  );

  const dateTo = new Date(
    dateParts[0],
    dateParts[1] - 1,
    dateParts[2],
    endTimeParts[0],
    endTimeParts[1],
  );
  return { dateFrom: dateFrom, dateTo: dateTo };
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(':');
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const formatMins = mins => {
  return mins < 10 ? `0${mins}` : mins;
};

export const countMinutes = () => new Date().getHours() * 60 + new Date().getMinutes();

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const currentMonth = (weekDates, weekStartDate) => {
  const firstmonth = months[weekDates[1].getMonth()].slice(0, 3);
  const secondmonth = months[weekDates[6].getMonth()].slice(0, 3);
  return weekDates[0].getMonth() === weekDates[6].getMonth()
    ? months[weekStartDate.getMonth()]
    : `${firstmonth} - ${secondmonth}`;
};
