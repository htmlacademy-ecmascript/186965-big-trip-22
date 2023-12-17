import { createElement } from '../render.js';
import { humanizeDate } from '../utils.js';
import { DATE_TIME_EDIT_EVENT, TIME_EVENT } from '../const.js';
import { mockOffersTypes } from '../mock/offers.js';
import { mockDestinations } from '../mock/destinations.js';

const createEventType = () =>
  mockOffersTypes.map((item) => `<div class="event__type-item">
    <input id="event-type-${item.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.type}">
    <label class="event__type-label  event__type-label--${item.type}" for="event-type-${item.type}-1">${(item.type).charAt(0).toUpperCase() + item.type.slice(1)}</label>
  </div>`).join('');


const createDestinationsOptions = () =>
  mockDestinations.map(({ name }) => `<option value="${name}"></option>`).join('');

const createCheckedOffers = (point, type) => {
  const pointTypeOffer = mockOffersTypes.find((offer) => offer.type === type);

  const createCheckedTripOffersTemplate = pointTypeOffer.offers.map((offer) => {
    const checkedOffers = point.offers.includes(offer.id) ? offer.title : '';

    return (`
      ${pointTypeOffer ? `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title}" type="checkbox" name="event-offer-${offer.title}" ${checkedOffers ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${offer.title}</span>
        +€&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>` : ''}`);
  }).join('');

  return createCheckedTripOffersTemplate;
};

const createPointEditTemplate = (point) => {
  const { dateFrom, dateTo, type, basePrice, destination } = point;

  const dateFromEvent = humanizeDate(dateFrom, DATE_TIME_EDIT_EVENT);
  const dateToEvent = humanizeDate(dateTo, DATE_TIME_EDIT_EVENT);
  const timeFromEvent = humanizeDate(dateFrom, TIME_EVENT);
  const timeToEvent = humanizeDate(dateTo, TIME_EVENT);


  return `
<li class="trip-events__item">
<form class="event event--edit" action="#" method="post">
<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${createEventType(type)}
      </fieldset>
    </div>
  </div>

  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
    ${type}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
    <datalist id="destination-list-1">
    ${createDestinationsOptions()}
    </datalist>
  </div>

  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
    —
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
  </div>

  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      €
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
  </div>

  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Delete</button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</header>
<section class="event__details">
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">${createCheckedOffers(point, type)}</div>
  </section>

  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>
  </section>
</section>
</form>
</li>`;

};


export default class PointEditView {
  constructor({ point }) {
    this.point = point;
  }

  getTemplate() {
    return createPointEditTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
