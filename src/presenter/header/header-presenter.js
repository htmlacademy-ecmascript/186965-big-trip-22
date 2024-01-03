import { render, RenderPosition } from '../../framework/render.js';

import TripInfoContainerView from '../../view/trip-info-container-view.js';
import TripInfoView from '../../view/trip-info-view.js';
import TripCostView from '../../view/trip-cost-view.js';
import AddNewPointButtonView from '../../view/add-new-point-button-view.js';
import FilterView from '../../view/filter-view.js';


const tripControlsElement = document.querySelector('.trip-controls');


export default class HeaderPresenter {
  #headerContainer = null;
  #points = null;
  #destinations = null;
  #tripPoints = null;

  constructor({ headerContainer, pointsModel, destinationsModel }) {
    this.#headerContainer = headerContainer;
    this.#points = pointsModel;
    this.#destinations = destinationsModel;
  }

  init() {
    this.#tripPoints = [...this.#points.get()];

    this.#renderHeader();

  }

  #renderHeader() {
    if (!this.#tripPoints.length) {
      render(new FilterView(), this.#headerContainer.querySelector('.trip-controls__filters'));
      render(new AddNewPointButtonView, tripControlsElement, RenderPosition.AFTEREND);
      return;
    }

    render(new TripInfoContainerView, this.#headerContainer.querySelector('.trip-main'), RenderPosition.AFTERBEGIN);
    render(new TripInfoView, this.#headerContainer.querySelector('.trip-info'));
    render(new TripCostView, this.#headerContainer.querySelector('.trip-info'));
    render(new FilterView(), this.#headerContainer.querySelector('.trip-controls__filters'));
    render(new AddNewPointButtonView, tripControlsElement, RenderPosition.AFTEREND);
  }
}
