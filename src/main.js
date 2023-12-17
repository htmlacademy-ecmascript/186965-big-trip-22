import { render, RenderPosition } from './render.js';

// View
import FilterView from './view/filter-view.js';
import TripInfoContainerView from './view/trip-info-container-view.js';
import TripInfoView from './view/trip-info-view.js';
import TripCostView from './view/trip-cost-view.js';
import AddNewPointButtonView from './view/add-new-point-button-view.js';


//Presenter
import PointsPresenter from './presenter/points-presenter.js';


//Model
import PointsModel from './model/points-model.js';


// header
const pageHeaderElement = document.querySelector('.page-header');
const tripInfoMainElement = pageHeaderElement.querySelector('.trip-main');

//main
const filterElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const tripControlsElement = document.querySelector('.trip-controls');

const siteTripControlsElement = siteMainElement.querySelector('.trip-events');

const pointsModel = new PointsModel();


const pointsPresenter = new PointsPresenter({ pointsContainer: siteTripControlsElement, pointsModel });


render(new TripInfoContainerView, tripInfoMainElement, RenderPosition.AFTERBEGIN);
render(new TripInfoView, tripInfoMainElement.querySelector('.trip-info'));
render(new TripCostView, tripInfoMainElement.querySelector('.trip-info'));
render(new AddNewPointButtonView, tripControlsElement, RenderPosition.AFTEREND);
render(new FilterView(), filterElement);

pointsPresenter.init();
