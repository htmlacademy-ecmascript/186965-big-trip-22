//Presenter
import PointsPresenter from './presenter/main/points-presenter.js';
import HeaderPresenter from './presenter/header/header-presenter.js';

//Model
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';

//mock
import MockService from './mock/service-mock.js';


//header
const pageHeaderElement = document.querySelector('.page-header');


//main
const siteMainElement = document.querySelector('.page-main');
const siteTripControlsElement = siteMainElement.querySelector('.trip-events');


const mockService = new MockService();
const pointsModel = new PointsModel(mockService);
const offersModel = new OffersModel(mockService);
const destinationsModel = new DestinationsModel(mockService);


const headerPresenter = new HeaderPresenter({
  headerContainer: pageHeaderElement,
  pointsModel,
  destinationsModel
});

const pointsPresenter = new PointsPresenter({
  pointsContainer: siteTripControlsElement,
  pointsModel,
  offersModel,
  destinationsModel
});


headerPresenter.init();
pointsPresenter.init();
