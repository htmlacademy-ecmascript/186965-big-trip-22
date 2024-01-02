import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
// import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';

import {render} from '../framework/render.js';

export default class PointsPresenter {
  #pointsBoard = new PointListView();
  #pointsContainer = null;
  #points = null;
  #offers = null;
  #destinations = null;
  #tripPoints = null;

  constructor({ pointsContainer, pointsModel, offersModel, destinationsModel }) {
    this.#pointsContainer = pointsContainer;
    this.#points = pointsModel;
    this.#offers = offersModel;
    this.#destinations = destinationsModel;

  }

  init() {
    this.#tripPoints = [...this.#points.get()];

    render(new SortView(), this.#pointsContainer);
    render(this.#pointsBoard, this.#pointsContainer);

    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);
    }
  }


  #renderPoint(point) {
    const pointComponent = new PointView({
      point,
      offers: this.#offers.getOfferByType(point.type),
      destination: this.#destinations.getDestinationById(point.destination)
    });

    render(pointComponent, this.#pointsBoard.element);
  }
}
