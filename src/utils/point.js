import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
// import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
// import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { MINUTES_PER_DAY, MINUTES_PER_HOUR } from '../const.js';

dayjs.extend(duration);
// dayjs.extend(isSameOrAfter);
// dayjs.extend(isSameOrBefore);

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


export { humanizeDate, getTripDuration };
