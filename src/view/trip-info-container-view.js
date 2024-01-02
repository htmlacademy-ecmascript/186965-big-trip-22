import AbstractView from '../framework/view/abstract-view.js';

const createTripInfoContainerTemplate = () => '<section class="trip-main__trip-info trip-info"></section>';

export default class TripInfoContainerView extends AbstractView {
  get template() {
    return createTripInfoContainerTemplate();
  }
}
