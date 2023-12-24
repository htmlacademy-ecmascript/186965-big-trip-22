export default class DestinationsModel {
  constructor(service) {
    this.service = service;
    this.destinations = this.service.getDestinations();
  }

  get() {
    return this.destinations;
  }

  getDestinationById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
