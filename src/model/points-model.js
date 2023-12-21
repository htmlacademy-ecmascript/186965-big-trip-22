// import { getRandomPoint } from '../mock/points.js';
// import { TRIP_EVENTS_AMOUNT } from '../const.js';

export default class PointsModel {
  constructor(service) {
    this.service = service;
    this.points = this.service.getPoints();
  }

  get() {
    return this.points;
  }
}


// export default class PointsModel {
//   points = Array.from({ length: TRIP_EVENTS_AMOUNT }, getRandomPoint);


//   getPoints() {
//     return this.points;
//   }
// }

