import AbstractStatefulView from '../../framework/view/abstract-stateful-view.js';

import { humanizeDate } from '../../utils/point.js';
import { DATE_TIME_EDIT_EVENT, TIME_EVENT } from '../../const.js';
import { mockOffersTypes } from '../../mock/offers.js';
import { mockDestinations } from '../../mock/destinations.js';

const createEventType = () =>
  mockOffersTypes.map((item) => `<div class="event__type-item">
    <input id="event-type-${item.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.type}">
    <label class="event__type-label  event__type-label--${item.type}" for="event-type-${item.type}-1">${(item.type).charAt(0).toUpperCase() + item.type.slice(1)}</label>
  </div>`).join('');


const createDestinationsOptions = () =>
  mockDestinations.map(({ name }) => `<option value="${name}"></option>`).join('');


const createPointEditTemplate = ({state, offers, destination }) => {
  const { type, basePrice, dateFrom, dateTo } = state.point;

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
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination?.name ? destination.name : ''}" list="destination-list-1">
    <datalist id="destination-list-1">
${createDestinationsOptions()};
    </datalist>
  </div>

  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFromEvent} ${timeFromEvent}">
    —
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateToEvent} ${timeToEvent}">
  </div>

  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      €
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
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
    <div class="event__available-offers">
    ${offers.map((offer) => {
    const checkedOffer = state.point.offers.includes(offer.id) ? 'checked' : '';

    return `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title}" type="checkbox" name="event-offer-${offer.title}" ${checkedOffer}>
           <label class="event__offer-label" for="event-offer-luggage-1">
              <span class="event__offer-title">${offer.title}</span>
              +€&nbsp;
              <span class="event__offer-price">${offer.price}</span>
            </label>
      </div>`;
  }).join('')}

    </div>
  </section>


  <section class="event__section  event__section--destination">
  ${destination?.description ? ` <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${destination.description}</p>` : ''}

  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${destination?.pictures ? destination.pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="Event photo">`) : ''}

      </div>
                    </div>



  </section>
</section>
</form>
</li>`;
};


export default class PointEditView extends AbstractStatefulView {
  #point = null;
  #offers = null;
  #destination = null;

  #handleFormSubmit = null;
  #handleFormHideBtnClick = null;

  constructor({ point, offers, destination, onFormSubmit, onHideBtnClick }) {
    super();
    this._setState(PointEditView.parsePointToState({point}));
    this.#offers = offers;
    this.#destination = destination;

    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormHideBtnClick = onHideBtnClick;

    this._restoreHandlers();


  }

  get template() {
    return createPointEditTemplate({
      state: this._state,
      offers: this.#offers,
      destination: this.#destination
    });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(PointEditView.parseStateToPoint(this._state));
  };

  #hideFormBtnClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormHideBtnClick();
  };

  #eventChangeHandler = (evt) => {
    this.updateElement({
      point: {
        ...this._state.point,
        type: evt.target.value
      }
    });
  };

  static parsePointToState = (point) => point;
  static parseStateToPoint = (state) => state.point;

  _restoreHandlers() {
    this.element.querySelector('.event').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#hideFormBtnClickHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#eventChangeHandler);
  }
}
