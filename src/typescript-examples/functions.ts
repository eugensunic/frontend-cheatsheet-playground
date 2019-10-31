export default class Functions {
  func1(): string | number {
    return 'word';
  }

  /*  function with function arguments and return type is function which evaluates to string or null */
  func2(func: () => void): () => string | null {
    // side effect
    func();
    return () => {
      return 'string';
    };
  }

  func3<T>(arg: T): T {
    return arg;
  }
  // fill boss, properties of both classes must be included
  func4(): Person & Boss {
    return {
      id: '1',
      name: 'eugen',
      lastName: 'sunic',
      executive: true
    };
  }

  // fill boss, properties of both classes must be included
  func5(): Boss {
    return {
      id: '1',
      name: 'eugen',
      lastName: 'sunic',
      executive: true
    };
  }

  func6(): { [key: string]: string } {
    return {
      id: '1'
    };
  }
}

interface Person {
  id: string;
  name: string;
  lastName: string;
}

interface Boss extends Person {
  executive: boolean;
}
