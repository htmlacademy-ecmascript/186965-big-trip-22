import { render, replace, remove } from '../../framework/render.js';

import PointView from '../../view/main/point-view.js';
import PointEditView from '../../view/main/point-edit-view.js';


export default class PointPresenter {

  #pointsContainer = null;
  #point = null;
  #offers = null;
  #destinations = null;

  #pointComponent = null;
  #pointEditComponent = null;

  constructor({ pointsContainer, offersModel, destinationsModel }) {
    this.#pointsContainer = pointsContainer;
    this.#offers = offersModel;
    this.#destinations = destinationsModel;
  }


  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      offers: this.#offers.getOfferByType(point.type),
      destination: this.#destinations.getDestinationById(point.destination),
      onEditClick: this.#handleEditClick
    });


    this.#pointEditComponent = new PointEditView({
      point: this.#point,
      offers: this.#offers.getOfferByType(point.type),
      destination: this.#destinations.getDestinationById(point.destination),
      onFormSubmit: this.#handleFormSubmit,
      onHideBtnClick: this.#handleFormSubmit
    });


    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointsContainer);
      return;
    }

    // Проверка на наличие в DOM необходима,
    // чтобы не пытаться заменить то, что не было отрисовано
    if (this.#pointsContainer.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointEditComponent.contains(prevPointEditComponent.element)) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  #replacePointToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

}