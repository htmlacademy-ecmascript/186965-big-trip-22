import { mockDestinations } from './destinations.js';
import { getRandomArrayElement } from '../utils.js';

const mockPoints = [
  {
    'id': 1,
    'basePrice': 100,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': mockDestinations[0].id,
    'isFavorite': true,
    'offers': [1, 5],
    'type': 'taxi'
  },
  {
    'id': 2,
    'basePrice': 200,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': mockDestinations[1].id,
    'isFavorite': false,
    'offers': [1, 5, 3],
    'type': 'bus'
  },
  {
    'id': 3,
    'basePrice': 300,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': mockDestinations[3].id,
    'isFavorite': true,
    'offers': [1, 2, 3, 4, 5],
    'type': 'train'
  },
  {
    'id': 4,
    'basePrice': 400,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': mockDestinations[4].id,
    'isFavorite': false,
    'offers': [1, 2, 3, 4, 5],
    'type': 'ship'
  },
  {
    'id': 5,
    'basePrice': 500,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': mockDestinations[5].id,
    'isFavorite': false,
    'offers': [2, 3, 5],
    'type': 'drive'
  },
  {
    'id': 6,
    'basePrice': 600,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': mockDestinations[6].id,
    'isFavorite': false,
    'offers': [2, 3, 4, 5],
    'type': 'flight'
  },
  {
    'id': 7,
    'basePrice': 700,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': mockDestinations[7].id,
    'isFavorite': true,
    'offers': [2],
    'type': 'check-in'
  },
  {
    'id': 8,
    'basePrice': 800,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': mockDestinations[8].id,
    'isFavorite': false,
    'offers': [1, 2, 5],
    'type': 'sightseeing'
  },
  {
    'id': 9,
    'basePrice': 900,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': mockDestinations[9].id,
    'isFavorite': true,
    'offers': [2],
    'type': 'restaurant'
  },
];

const getRandomPoint = () => getRandomArrayElement(mockPoints);

export { getRandomPoint };
