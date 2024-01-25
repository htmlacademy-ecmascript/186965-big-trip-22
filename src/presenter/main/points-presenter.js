import SortView from '../../view/main/sort-view.js';
import NoPointsView from '../../view/main/no-points-view.js';
import PointListView from '../../view/main/point-list-view.js';
import { render } from '../../framework/render.js';
import PointPresenter from './point-presenter.js';

import { updateItem } from '../../utils/common.js';

export default class PointsPresenter {
  #pointsBoard = new PointListView();
  #sortComponent = null;
  #noPointsComponent = new NoPointsView();
  #pointsContainer = null;
  #offers = null;
  #destinations = null;

  #points = [];

  #pointPresenters = new Map();

  constructor({ pointsContainer, pointsModel, offersModel, destinationsModel }) {
    this.#pointsContainer = pointsContainer;
    this.#points = [...pointsModel.get()];

    this.#offers = offersModel;
    this.#destinations = destinationsModel;

  }

  init() {
    this.#renderPointsBoard();
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleSortTypeChange = (sortType) => {

  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#pointsBoard.element,
      offersModel: this.#offers,
      destinationsModel: this.#destinations,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handelModeChange
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#pointsContainer);
  }

  #renderNoPoint() {
    render(this.#noPointsComponent, this.#pointsContainer);
  }

  #renderPointsList() {
    render(this.#pointsBoard, this.#pointsContainer);
  }


  #renderPointsBoard() {
    if (!this.#points.length) {
      this.#renderNoPoint();
      return;
    }

    this.#renderSort();
    this.#renderPointsList();

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

  #handelModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }
}
