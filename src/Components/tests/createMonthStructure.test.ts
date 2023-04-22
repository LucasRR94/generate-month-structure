import {createMonthStructure} from '../createMonthStructure';

describe('createMonthStructure', () => {
  it('correctly generate the structure of a month with 28 days start on sunday', () => {
    const testDate = new Date('1981-02-01');
    const expectedResult = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ];
    expect(createMonthStructure(testDate)).toEqual(expectedResult);
  });

  it('correctly generate the structure of a month with 28 days start on saturday', () => {
    const testDate = new Date('2014-02-01');
    const expectedResult = [
      26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1,
    ];
    expect(createMonthStructure(testDate)).toEqual(expectedResult);
  });

  it('correctly generate the structure of a month with 28 days start on wednesday', () => {
    const testDate = new Date('2017-02-01');
    const expectedResult = [
      29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1, 2, 3, 4,
    ];
    expect(createMonthStructure(testDate)).toEqual(expectedResult);
  });

  it('correctly generate the structure of a month with 31 days start on sunday', () => {
    const testDate = new Date('1999-08-01');
    const expectedResult = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4,
    ];
    expect(createMonthStructure(testDate)).toEqual(expectedResult);
  });

  it('correctly generate the structure of a month with 31 days start on saturday', () => {
    const testDate = new Date('2015-08-01');
    const expectedResult = [
      26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3,
      4, 5,
    ];
    expect(createMonthStructure(testDate)).toEqual(expectedResult);
  });

  it('correctly generate the structure of a month with 31 days start on wednesday', () => {
    const testDate = new Date('2018-08-01');
    const expectedResult = [
      29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1,
    ];
    expect(createMonthStructure(testDate)).toEqual(expectedResult);
  });
});
