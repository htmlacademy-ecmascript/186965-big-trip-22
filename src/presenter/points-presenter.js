import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointItemView from '../view/point-view.js';

import {render} from '../render.js';

export default class PointsPresenter {
  pointsBoard = new PointListView();

  constructor({ pointsContainer }) {
    this.pointsContainer = pointsContainer;
  }

  init() {
    render(new SortView, this.pointsContainer);
    render(this.pointsBoard, this.pointsContainer);
    render(new PointEditView(), this.pointsBoard.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointItemView(), this.pointsBoard.getElement());
    }

  }
}
