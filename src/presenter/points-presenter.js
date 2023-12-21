import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';

import {render} from '../render.js';

export default class PointsPresenter {
  pointsBoard = new PointListView();

  constructor({ pointsContainer, pointsModel, offersModel, destinationsModel }) {
    this.pointsContainer = pointsContainer;
    this.points = pointsModel;
    this.offers = offersModel;
    this.destinations = destinationsModel;

  }

  init() {
    this.tripPoints = [...this.points.get()];


    render(new SortView, this.pointsContainer);
    render(this.pointsBoard, this.pointsContainer);

    render(new PointEditView({
      point: this.tripPoints[0],
      offers: this.offers.getOfferByType(this.tripPoints[0].type),
      destination: this.destinations.getDestinationById(this.tripPoints[0].id)
    }), this.pointsBoard.getElement());

    for (let i = 0; i < this.tripPoints.length; i++) {
      render(new PointView({point: this.tripPoints[i]}), this.pointsBoard.getElement());
    }

  }
}
