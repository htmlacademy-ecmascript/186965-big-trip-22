import SortView from '../../view/sort-view.js';
import PointListView from '../../view/point-list-view.js';
import PointEditView from '../../view/point-edit-view.js';
import PointView from '../../view/point-view.js';
import NoPointsView from '../../view/no-points-view.js';

import {render, replace} from '../../framework/render.js';

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

    this.#renderPointsBoard();

  }


  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      offers: this.#offers.getOfferByType(point.type),
      destination: this.#destinations.getDestinationById(point.destination),
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new PointEditView({
      point,
      offers: this.#offers.getOfferByType(point.type),
      destination: this.#destinations.getDestinationById(point.destination),
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onHideBtnClick: () => {
        replaceFormToPoint();
      }
    });

    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }


    render(pointComponent, this.#pointsBoard.element);
  }

  #renderPointsBoard() {
    if (!this.#tripPoints.length) {
      render(new NoPointsView(), this.#pointsContainer);
      return;
    }

    render(new SortView(), this.#pointsContainer);
    render(this.#pointsBoard, this.#pointsContainer);

    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);
    }
  }
}
