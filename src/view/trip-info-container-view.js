import { createElement } from '../render.js';

const createTripInfoContainerTemplate = () => '<section class="trip-main__trip-info trip-info"></section>';

export default class TripInfoContainerView {
  getTemplate() {
    return createTripInfoContainerTemplate();
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
