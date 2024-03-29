const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const OFFERS = ['Add luggage', 'Switch to comfort', 'Add meal', 'Choose seats', 'Travel by train', 'Upgrade to a business class'];
const POINTS__AMOUNT = 3;

const START_DATE_FORMAT = 'MMM DD';
const DATE_TIME_EVENT = 'YYYY-MM-DD';
const TIME_EVENT = 'HH:mm';
const DATE_TIME_EDIT_EVENT = 'DD/MM/YY';
const DATE = 'D';
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

const FilterType = {
  ALL: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const MAX_VISIBLE_CITIES_COUNT = 4;
const MULTIPLE_DOTS = '...';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

const SortType = {
  DEFAULT: 'day',
  TIME: 'time',
  PRICE: 'price'
};


export { POINT_TYPES, OFFERS, POINTS__AMOUNT, START_DATE_FORMAT, DATE_TIME_EVENT,TIME_EVENT, DATE_TIME_EDIT_EVENT, DATE, MINUTES_PER_HOUR, MINUTES_PER_DAY, FilterType, MAX_VISIBLE_CITIES_COUNT, MULTIPLE_DOTS, Mode, SortType };
