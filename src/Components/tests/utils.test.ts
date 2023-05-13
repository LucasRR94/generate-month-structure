import {
  getInitialDayOfMonth,
  getTheSizeOfMonthInDays,
  getANumberArray,
  getMonthArray,
  getTheAmountOfWeeksNecessaryForTheMonthStructure,
  BellongMonth,
  Day,
} from '../utils';

jest.useFakeTimers().setSystemTime(new Date('2023-04-21'));

describe('getInitialDayOfMonth', () => {
  it('correctly calcute the initial day of the month', () => {
    const date = new Date(Date.parse('2023-04-21T00:00:00-00:00'));
    expect(getInitialDayOfMonth(date)).toEqual(5);
  });
});

describe('getTheSizeOfMonthInDays', () => {
  it('correctly calculate the size of the month', () => {
    const timeStamp = Date.parse('2020-05-01');
    const date = new Date(timeStamp);
    expect(getTheSizeOfMonthInDays(date)).toEqual(31);
  });
});

describe('getANumberArray', () => {
  it('correctly can generate the array of 0 positions', () => {
    expect(getANumberArray(0, 0)).toStrictEqual([]);
  });

  it('correctly can generate the array of 1 positions starting by number', () => {
    const number = 63;
    expect(getANumberArray(1, number)).toStrictEqual([number]);
  });

  it('correctly can generate the array of 1 multiple positions starting by number', () => {
    const number = 63;
    const expectResult = [63, 64, 65, 66, 67, 68, 69, 70, 71, 72];
    expect(getANumberArray(10, number)).toStrictEqual(expectResult);
  });

  it('correctly can generate the array of 1 multiple positions starting by 0', () => {
    const number = 0;
    const expectResult = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(getANumberArray(10, number)).toStrictEqual(expectResult);
  });
});

describe('getMonthArray', () => {
  it('can correctly generate the month array', () => {
    const date = new Date(Date.parse('2023-04-21T00:00:00-00:00'));
    const expectedResult = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];
    expect(getMonthArray(date)).toStrictEqual(expectedResult);
  });
});

describe('getTheAmountOfWeeksNecessaryForTheMonthStructure', () => {
  it('can correctly calculate the amount of weeks of month with numberOfDays in zero', () => {
    expect(
      getTheAmountOfWeeksNecessaryForTheMonthStructure(0, 10)
    ).toStrictEqual(2);
  });
  it('can correctly calculate the amount of weeks of month with initialDayOfWeek in zero', () => {
    expect(
      getTheAmountOfWeeksNecessaryForTheMonthStructure(10, 0)
    ).toStrictEqual(2);
  });

  it('can correctly calculate the amount of weeks of month with a average month that start on sunday', () => {
    expect(
      getTheAmountOfWeeksNecessaryForTheMonthStructure(30, 0)
    ).toStrictEqual(5);
  });

  it('can correctly calculate the amount of weeks of month with a average month that start on saturday', () => {
    expect(
      getTheAmountOfWeeksNecessaryForTheMonthStructure(30, 6)
    ).toStrictEqual(6);
  });

  it('can correctly calculate the amount of weeks of month with max size that start on monday', () => {
    expect(
      getTheAmountOfWeeksNecessaryForTheMonthStructure(31, 0)
    ).toStrictEqual(5);
  });

  it('can correctly calculate the amount of weeks of month with max size that start on saturday', () => {
    expect(
      getTheAmountOfWeeksNecessaryForTheMonthStructure(31, 6)
    ).toStrictEqual(6);
  });
});

describe('BellongMonth', () => {
  it('correctly is cappable of describing the three states of month', () => {
    const previous: BellongMonth = BellongMonth.previous;
    const current: BellongMonth = BellongMonth.current;
    const next: BellongMonth = BellongMonth.next;
    expect(previous).toEqual('previous');
    expect(current).toEqual('current');
    expect(next).toEqual('next');
  });
});

describe('Day', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const checkTheTypeOfInterfaceDay = (object: any): object is Day =>
    'content' in object && 'flagging' in object;

  it('correctly accept object of type Day', () => {
    const day: Day = {content: 0, flagging: BellongMonth.current};
    expect(checkTheTypeOfInterfaceDay(day)).toBeTruthy();
  });

  it('correctly rejects object of type Day', () => {
    expect(checkTheTypeOfInterfaceDay({content: 10})).toBeFalsy();
  });
});
