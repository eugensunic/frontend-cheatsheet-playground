// evaluates simple data (primitive data) out of promise

export default class Promises {
  constructor() {}

  promise0(): Promise<string | number | null> {
    return new Promise(res => {
      setTimeout(() => {
        res('someone');
      }, 1000);
    });
  }

  // returns array of numbers [1,2,3,4]
  promise1(): Promise<number[]> {
    return new Promise(res => {
      setTimeout(() => {
        res([4, 5]);
      }, 1000);
    });
  }

  // returns complex object from promise (1)
  promise2(): Promise<Partial<Car>> {
    return new Promise(res => {
      setTimeout(() => {
        res({ id: 3234534634, name: 'Toyota', color: Colors.red });
      }, 1000);
    });
  }

  // returns complex object from promise (2)
  promise3(): Promise<Partial<VehicleGroup> | null | undefined> {
    return new Promise(res => {
      setTimeout(() => {
        res({
          id: 3234534634,
          elements: [{ id: 111, tag: 'over' }, { id: 112, tag: 'some' }]
        });
      }, 1000);
    });
  }

  // return function which evaluates to string or number from promise
  promise4(): Promise<() => string | number> {
    const myFunc = () => 4;
    return new Promise(res => res(myFunc));
  }
}

enum Colors {
  red = 'red',
  green = 'green',
  white = 'white'
}

interface Car {
  id: number;
  name: string;
  color: Colors;
  isNew: boolean;
}

interface VehicleGroup {
  id: number;
  elements: Partial<Elements>[];
  owner: string;
}

interface Elements {
  id: number;
  tag: string;
  tire: string;
}

/* Partial will allow you to not include one of the properties from the interface but will complain if it
 sees a property which does not belong to the interface */
