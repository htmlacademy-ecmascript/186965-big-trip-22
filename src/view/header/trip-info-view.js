import AbstractView from '../../framework/view/abstract-view.js';
import { humanizeDate } from '../../utils/point.js';
import { START_DATE_FORMAT, MAX_VISIBLE_CITIES_COUNT, MULTIPLE_DOTS } from '../../const.js';

const createTripInfoTemplate = ({ points, destinations }) => {
  const pointsStartDate = humanizeDate(points[0].dateFrom, START_DATE_FORMAT);
  const pointsEndDate = humanizeDate(points[points.length - 1].dateFrom, START_DATE_FORMAT);

  return (`<div class="trip-info__main">
  <h1 class="trip-info__title">${destinations}</h1>

  <p class="trip-info__dates">${pointsStartDate}&nbsp;—&nbsp;${pointsEndDate}</p>
  </div>`);
};


export default class TripInfoView extends AbstractView {
  #points = null;
  #destinations = null;

  constructor({ points, destinations }) {
    super();

    this.#points = points;
    this.#destinations = destinations;
  }

  get template() {
    return createTripInfoTemplate({
      points: this.#points,
      destinations: this.#getDestinationsNames()
    });
  }


  #getDestinationsNames() {

    const startCity = this.#destinations.find((destination) => destination.id === this.#points[0].destination);
    let middleCities = this.#destinations.find((destination) => destination.id === this.#points[1]?.destination);
    const endCity = this.#destinations.find((destination) => destination.id === this.#points[this.#points.length - 1].destination);

    if (this.#points.length > MAX_VISIBLE_CITIES_COUNT) {
      middleCities = MULTIPLE_DOTS;
    }

    switch (this.#points.length) {
      case 1:
        return startCity.name;
      case 2:
        return `${startCity.name} &mdash; ${middleCities.name} &mdash; ${endCity.name}`;
      default:
        return `${startCity.name} &mdash; ${middleCities.name} &mdash; ${endCity.name}`;
    }
  }
}
