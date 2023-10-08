import { Console } from '.';

describe('Index', () => {
  it('should run the console log', () => {
    let log = jest.spyOn(global.console, 'log');

    Console('asd');

    expect(log).toHaveBeenCalled();
  });
});
