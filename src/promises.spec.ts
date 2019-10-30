import Promises from './promise';

describe('Promises', () => {
  it('should greet', () => {
    const promise = new Promises();
    spyOn(console, 'log');

    promise.promise0();

    expect(console.log).toHaveBeenCalled();
  });
});
