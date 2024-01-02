import { POINTS__AMOUNT } from '../const.js';

import { mockDestinations } from '../mock/destinations.js';
import { mockOffersTypes } from '../mock/offers.js';
import { getRandomPoint } from '../mock/points.js';


export default class MockService {
  #points = null;
  #offers = null;
  #destinations = null;

  constructor() {
    this.#points = Array.from({ length: POINTS__AMOUNT }, getRandomPoint);
    this.#offers = mockOffersTypes;
    this.#destinations = mockDestinations;

  }

  getPoints() {
    return this.#points;
  }


  getOffers() {
    return this.#offers;
  }

  getDestinations() {
    return this.#destinations;
  }
}
