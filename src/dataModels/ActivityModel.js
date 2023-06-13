export default class ActivityModel {
  constructor(data) {
    this.data = data;
  }

  format() {
    return this.data.data.sessions;
  }
}
