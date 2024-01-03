import { getRandomArrayElement } from '../utils/common.js';

const mockPoints = [
  {
    'id': 1,
    'basePrice': 100,
    'dateFrom': '2019-09-10T11:05:56.845Z',
    'dateTo': '2019-09-11T12:02:13.375Z',
    'destination': 1,
    'isFavorite': true,
    'offers': [1, 5],
    'type': 'taxi'
  },
  {
    'id': 2,
    'basePrice': 200,
    'dateFrom': '2019-07-10T02:15:56.845Z',
    'dateTo': '2019-07-11T14:12:13.375Z',
    'destination': 2,
    'isFavorite': false,
    'offers': [1, 5, 3],
    'type': 'bus'
  },
  {
    'id': 3,
    'basePrice': 300,
    'dateFrom': '2019-06-10T23:05:56.845Z',
    'dateTo': '2019-06-11T16:01:13.375Z',
    'destination': 3,
    'isFavorite': true,
    'offers': [1, 3, 5],
    'type': 'train'
  },
  {
    'id': 4,
    'basePrice': 400,
    'dateFrom': '2019-03-10T16:25:56.845Z',
    'dateTo': '2019-03-11T22:00:13.375Z',
    'destination': 4,
    'isFavorite': false,
    'offers': [1, 2, 3],
    'type': 'ship'
  },
  {
    'id': 5,
    'basePrice': 500,
    'dateFrom': '2019-02-10T11:45:56.845Z',
    'dateTo': '2019-02-11T15:12:13.375Z',
    'destination': 5,
    'isFavorite': false,
    'offers': [3, 5],
    'type': 'drive'
  },
  {
    'id': 6,
    'basePrice': 600,
    'dateFrom': '2019-01-10T21:10:56.845Z',
    'dateTo': '2019-01-11T11:32:13.375Z',
    'destination': 1,
    'isFavorite': false,
    'offers': [3, 4, 5],
    'type': 'flight'
  },
  {
    'id': 7,
    'basePrice': 700,
    'dateFrom': '2019-12-10T10:55:56.845Z',
    'dateTo': '2019-12-11T19:22:13.375Z',
    'destination': 2,
    'isFavorite': true,
    'offers': [2],
    'type': 'check-in'
  },
  {
    'id': 8,
    'basePrice': 800,
    'dateFrom': '2019-11-10T16:55:56.845Z',
    'dateTo': '2019-11-11T11:22:13.375Z',
    'destination': 3,
    'isFavorite': false,
    'offers': [1, 5],
    'type': 'sightseeing'
  },
  {
    'id': 9,
    'basePrice': 900,
    'dateFrom': '2019-03-10T12:55:56.845Z',
    'dateTo': '2019-03-11T09:22:13.375Z',
    'destination': 4,
    'isFavorite': true,
    'offers': [],
    'type': 'restaurant'
  },
];

const getRandomPoint = () => getRandomArrayElement(mockPoints);

export { getRandomPoint };
