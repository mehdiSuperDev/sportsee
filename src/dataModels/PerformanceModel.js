export default class PerformanceModel {
  constructor(data) {
    this.data = data;
  }

  format() {
    const kindDict = this.data.data.kind;
    const mappedData = this.data.data.data.map((item) => {
      return { kind: kindDict[item.kind], value: item.value };
    });
    return mappedData;
  }
}
