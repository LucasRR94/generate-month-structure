import {getPreviousMonthSlice} from '../getPreviousMonthSlice';

describe('getPreviousMonthSlice', () => {
  it('correctly can generate an empty array without numberOfEmptyDaysBeforeNextMonth', () => {
    const date = new Date(Date.parse('2023-03-01T00:00:00-00:00'));
    expect(getPreviousMonthSlice(date, 0)).toEqual([]);
  });

  it('correctly can generate an entire week', () => {
    const date = new Date(Date.parse('2023-04-01T00:00:00-00:00'));
    expect(getPreviousMonthSlice(date, 6)).toEqual([26, 27, 28, 29, 30, 31]);
  });
});
