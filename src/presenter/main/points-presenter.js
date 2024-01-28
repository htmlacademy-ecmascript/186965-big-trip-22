import SortView from '../../view/main/sort-view.js';
import NoPointsView from '../../view/main/no-points-view.js';
import PointListView from '../../view/main/point-list-view.js';
import { render } from '../../framework/render.js';
import PointPresenter from './point-presenter.js';

import { updateItem } from '../../utils/common.js';
import { sortPointsByPrice, sortPointsByTime } from '../../utils/point.js';
import { SortType } from '../../const.js';

export default class PointsPresenter {
  #pointsBoard = new PointListView();
  #sortComponent = null;
  #noPointsComponent = new NoPointsView();
  #pointsContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #points = [];
  #pointPresenters = new Map();
  #currentSortType = SortType.DEFAULT;
  #sourcedPoints = [];

  constructor({ pointsContainer, pointsModel, offersModel, destinationsModel }) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = [...pointsModel.get()];

    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

  }

  init() {
    this.#points = [... this.#pointsModel];
    this.#sourcedPoints = [... this.#pointsModel];

    this.#renderPointsBoard();
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#sourcedPoints = updateItem(this.#sourcedPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.TIME:
        this.#points.sort(sortPointsByTime);
        break;
      case SortType.PRICE:
        this.#points.sort(sortPointsByPrice);
        break;
      default:
        this.#points = [...this.#sourcedPoints];
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointsList();
    this.#renderPoints();
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#pointsBoard.element,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handelModeChange
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }


  #renderPointsBoard() {
    if (!this.#points.length) {
      this.#renderNoPoint();
      return;
    }

    this.#renderSort();
    render(this.#pointsBoard, this.#pointsContainer);
    this.#renderPoints();
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#pointsContainer);
  }

  #renderNoPoint() {
    render(this.#noPointsComponent, this.#pointsBoard);
  }


  #handelModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }
}
