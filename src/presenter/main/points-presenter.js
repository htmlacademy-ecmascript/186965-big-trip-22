import SortView from '../../view/main/sort-view.js';
import NoPointsView from '../../view/main/no-points-view.js';
import PointListView from '../../view/main/point-list-view.js';
import { render } from '../../framework/render.js';
import PointPresenter from './point-presenter.js';

export default class PointsPresenter {
  #pointsBoard = new PointListView();
  #sortComponent = new SortView();
  #noPointsComponent = new NoPointsView();
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

    this.#renderPointsBoard();

  }


  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#pointsBoard.element,
      offersModel: this.#offers,
      destinationsModel: this.#destinations
    });

    pointPresenter.init(point);
  }


  #renderSort() {
    render(this.#sortComponent, this.#pointsContainer);
  }

  #renderNoPoint() {
    render(this.#noPointsComponent, this.#pointsContainer);
  }

  #renderPointsList() {
    render(this.#pointsBoard, this.#pointsContainer);
  }


  #renderPointsBoard() {
    if (!this.#tripPoints.length) {
      this.#renderNoPoint();
      return;
    }

    this.#renderSort();
    this.#renderPointsList();

    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);
    }
  }
}
