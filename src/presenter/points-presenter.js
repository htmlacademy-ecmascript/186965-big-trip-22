import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';

import {render} from '../render.js';

export default class PointsPresenter {
  pointsBoard = new PointListView();

  constructor({ pointsContainer, pointsModel }) {
    this.pointsContainer = pointsContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.tripPoints = [...this.pointsModel.getPoints()];


    render(new SortView, this.pointsContainer);
    render(this.pointsBoard, this.pointsContainer);
    render(new PointEditView({point: this.tripPoints[0]}), this.pointsBoard.getElement());

    for (let i = 0; i < this.tripPoints.length; i++) {
      render(new PointView({point: this.tripPoints[i]}), this.pointsBoard.getElement());
    }

  }
}