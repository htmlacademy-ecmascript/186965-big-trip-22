import { createElement } from '../render.js';

const createPointsListTemplate = () => '<ul class="trip-events__list">';


export default class PointListView {
  getTemplate() {
    return createPointsListTemplate();
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