import AbstractView from '../../framework/view/abstract-view.js';

const createTripCostTemplate = (points) => {
  let totalPrice = 0;

  points.forEach((point) => {
    totalPrice += point.basePrice;
  });

  return `<p class="trip-info__cost">
  Total: €&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>`;
};

export default class TripCostView extends AbstractView {
  #totalPrice = null;

  constructor(totalPrice) {
    super();

    this.#totalPrice = totalPrice;
  }


  get template() {
    return createTripCostTemplate(this.#totalPrice);
  }
}
