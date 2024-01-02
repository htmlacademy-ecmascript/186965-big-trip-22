import AbstractView from '../framework/view/abstract-view.js';

const createTripCostTemplate = () => `<p class="trip-info__cost">
Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
</p>`;

export default class TripCostView extends AbstractView {
  get template() {
    return createTripCostTemplate();
  }
}
