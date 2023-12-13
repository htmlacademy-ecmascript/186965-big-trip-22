import FilterView from './view/filter-view.js';

import { render } from './render.js';

import PointsPresenter from './presenter/event-list-presenter.js';

const filterElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const siteTripControlsElement = siteMainElement.querySelector('.trip-events');
const pointsBoardPresenter = new PointsPresenter({ pointsContainer: siteTripControlsElement });

render(new FilterView(), filterElement);

pointsBoardPresenter.init();
