import { AlphabetSortPipe } from './alphabet-sort.pipe';

describe('AlphabetSortPipe', () => {
  it('create an instance', () => {
    const pipe = new AlphabetSortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort array alphabetically', () => {
    const array = [
      { letter: 'c'},
      { letter: 'a'},
      { letter: 'b'}, ];

    const sortedArray = [
      { letter: 'a'},
      { letter: 'b'},
      { letter: 'c'}, ];
    const pipe = new AlphabetSortPipe();
    expect(pipe.transform(array, 'letter')).toEqual(sortedArray);
  })
});
