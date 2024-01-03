import { render, RenderPosition } from '../../framework/render.js';

import TripInfoContainerView from '../../view/header/trip-info-container-view.js';
import TripInfoView from '../../view/header/trip-info-view.js';
import TripCostView from '../../view/header/trip-cost-view.js';
import AddNewPointButtonView from '../../view/header/add-new-point-button-view.js';
import FilterView from '../../view/header/filter-view.js';
import { generateFilter } from '../../mock/filter.js';

const tripControlsElement = document.querySelector('.trip-controls');


export default class HeaderPresenter {
  #headerContainer = null;
  #points = null;
  #destinations = null;
  #tripPoints = null;
  #pointDestinations = null;

  #filters = null;

  constructor({ headerContainer, pointsModel, destinationsModel }) {
    this.#headerContainer = headerContainer;
    this.#points = pointsModel;
    this.#destinations = destinationsModel;
  }

  init() {
    this.#tripPoints = [...this.#points.get()];
    this.#filters = generateFilter(this.#tripPoints);
    this.#pointDestinations = this.#destinations.get();

    this.#renderHeader();
  }

  #renderHeader() {

    if (!this.#tripPoints.length) {
      render(new FilterView(this.#filters), this.#headerContainer.querySelector('.trip-controls__filters'));
      render(new AddNewPointButtonView, tripControlsElement, RenderPosition.AFTEREND);
      return;
    }

    render(new TripInfoContainerView, this.#headerContainer.querySelector('.trip-main'), RenderPosition.AFTERBEGIN);

    render(new TripInfoView({
      points: this.#tripPoints,
      destinations: this.#pointDestinations
    }), this.#headerContainer.querySelector('.trip-info'));

    render(new TripCostView(this.#tripPoints), this.#headerContainer.querySelector('.trip-info'));
    render(new FilterView(this.#filters), this.#headerContainer.querySelector('.trip-controls__filters'));
    render(new AddNewPointButtonView, tripControlsElement, RenderPosition.AFTEREND);
  }
}
