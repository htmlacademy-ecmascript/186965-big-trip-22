import AbstractView from '../framework/view/abstract-view.js';

const createPointsListTemplate = () => '<ul class="trip-events__list">';


export default class PointListView extends AbstractView{
  get template() {
    return createPointsListTemplate();
  }
}
