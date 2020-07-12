import { getShapeArray } from './baseService';

export default class RandomGenerator {
  static getRndInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;

  static *shuffle(array: Array<any>) {
    var i = array.length;

    while (i--) {
      yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    }
  }

  static shaffleDNums = RandomGenerator.shuffle(getShapeArray());

  static getRndShape() {
    var val = this.shaffleDNums.next().value;
    if (val === undefined) {
      this.shaffleDNums = RandomGenerator.shuffle(getShapeArray());
      val = this.shaffleDNums.next().value;
    }
    return val;
  }
}
