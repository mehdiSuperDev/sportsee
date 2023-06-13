export default class CardsModel {
  constructor(data) {
    this.data = data;
  }

  format() {
    const key = this.data.data.keyData;

    return [
      { name: 'glucides', value: key.calorieCount },
      { name: 'proteines', value: key.proteinCount },
      { name: 'lipides', value: key.carbohydrateCount },
      { name: 'calories', value: key.lipidCount },
    ];
  }
}
