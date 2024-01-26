import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { MINUTES_PER_DAY, MINUTES_PER_HOUR } from '../const.js';

dayjs.extend(duration);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const humanizeDate = (date, dateFormat) => date ? dayjs(date).format(dateFormat) : '';

const getTripDatesDifference = (dateFrom, dateTo) => (dayjs(dateTo).diff(dateFrom)) / 60000;


const getTripDuration = (dateForm, dateTo) => {
  const timeDifference = getTripDatesDifference(dateForm, dateTo);

  switch (true) {
    case timeDifference < MINUTES_PER_HOUR:
      return dayjs.duration(timeDifference, 'minutes').format('mm[M]');
    case timeDifference >= MINUTES_PER_HOUR && timeDifference < MINUTES_PER_DAY:
      return dayjs.duration(timeDifference, 'minutes').format('HH[H] mm[M]');
    case timeDifference >= MINUTES_PER_DAY:
      return dayjs.duration(timeDifference, 'minutes').format('DD[D] HH[H] mm[M]');
  }
};


const isFutureTrip = (dateFrom) => dayjs().isBefore(dayjs(dateFrom));

const isPresentTrip = (dateFrom, dateTo) => dayjs().isSameOrBefore(dayjs(dateFrom)) && dayjs().isSameOrAfter(dayjs(dateTo));

const isPastTrip = (dateTo) => dayjs().isAfter(dayjs(dateTo));


const getWeightForNullDate = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};

const sortPointsByDay = (pointA, pointB) => {
  const weight = getWeightForNullDate(pointA.dateTo, pointB.dateTo);

  return weight ?? dayjs(pointA.dateTo).diff(dayjs(pointB.dateTo));
};

const sortPointsByTime = (pointA, pointB) => {
  const pointATime = getTripDatesDifference(pointA.dateFrom, pointA.dateTo);
  const pointBTime = getTripDatesDifference(pointB.dateFrom, pointB.dateTo);

  return pointATime - pointBTime;
};

const sortPointsByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

export { humanizeDate, getTripDuration, isFutureTrip, isPresentTrip, isPastTrip, sortPointsByDay, sortPointsByPrice, sortPointsByTime};
