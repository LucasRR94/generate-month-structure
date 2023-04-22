import {getNextMonthSlice} from '../getNextMonthSlice';

describe('getNextMonthSlice', () => {
  it('correctly can generate an empty array without numberOfEmptyDaysAfterMonth', () => {
    expect(getNextMonthSlice(0)).toEqual([]);
  });

  it('correctly can generate an entire week', () => {
    expect(getNextMonthSlice(6)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
