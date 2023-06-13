export default class ScoreModel {
  constructor(data) {
    this.data = data;
  }

  //   La clé peut etre soit "score" ou "todayScore"
  format() {
    return (this.data.data.score || this.data.data.todayScore || 0) * 100;
  }
}
