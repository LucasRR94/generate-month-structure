import {createMonthStructureFlaggingDaysAccordingMonth} from '../createMonthStructureFlaggingDaysAccordingMonth';
import {BellongMonth, Day} from '../utils';

describe('createMonthStructureFlaggingDaysAccordingMonth', () => {
  it('correctly generate the structure of a month and flags of 28 days start on sunday', () => {
    const testDate = new Date('1981-02-01');
    const expectedResult = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.current,
      };
      return day;
    });
    expect(createMonthStructureFlaggingDaysAccordingMonth(testDate)).toEqual(
      expectedResult
    );
  });

  it('correctly generate the structure of a month and flags of 28 days start on saturday', () => {
    const testDate = new Date('2014-02-01');
    const previousMonth = [26, 27, 28, 29, 30, 31].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.previous,
      };
      return day;
    });
    const currentMonth = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.current,
      };
      return day;
    });
    const nextMonth = [1].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.next,
      };
      return day;
    });
    const expectedResult = [...previousMonth, ...currentMonth, ...nextMonth];
    expect(createMonthStructureFlaggingDaysAccordingMonth(testDate)).toEqual(
      expectedResult
    );
  });

  it('correctly generate the structure of a month and flags of 28 days start on wednesday', () => {
    const previousMonth = [29, 30, 31].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.previous,
      };
      return day;
    });
    const currentMonth = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.current,
      };
      return day;
    });
    const nextMonth = [1, 2, 3, 4].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.next,
      };
      return day;
    });
    const testDate = new Date('2017-02-01');
    const expectedResult = [...previousMonth, ...currentMonth, ...nextMonth];
    expect(createMonthStructureFlaggingDaysAccordingMonth(testDate)).toEqual(
      expectedResult
    );
  });

  it('correctly generate the structure of a month and flags of 31 days start on sunday', () => {
    const currentMonth = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.current,
      };
      return day;
    });
    const nextMonth = [1, 2, 3, 4].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.next,
      };
      return day;
    });
    const testDate = new Date('1999-08-01');
    const expectedResult = [...currentMonth, ...nextMonth];
    expect(createMonthStructureFlaggingDaysAccordingMonth(testDate)).toEqual(
      expectedResult
    );
  });

  it('correctly generate the structure of a month and flags of 31 days start on saturday', () => {
    const previousMonth = [26, 27, 28, 29, 30, 31].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.previous,
      };
      return day;
    });
    const currentMonth = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.current,
      };
      return day;
    });
    const nextMonth = [1, 2, 3, 4, 5].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.next,
      };
      return day;
    });
    const testDate = new Date('2015-08-01');
    const expectedResult = [...previousMonth, ...currentMonth, ...nextMonth];
    expect(createMonthStructureFlaggingDaysAccordingMonth(testDate)).toEqual(
      expectedResult
    );
  });

  it('correctly generate the structure of a month and flags of 31 days start on wednesday', () => {
    const previousMonth = [29, 30, 31].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.previous,
      };
      return day;
    });
    const currentMonth = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.current,
      };
      return day;
    });
    const nextMonth = [1].map(current => {
      const day: Day = {
        content: current,
        flagging: BellongMonth.next,
      };
      return day;
    });
    const testDate = new Date('2018-08-01');
    const expectedResult = [...previousMonth, ...currentMonth, ...nextMonth];
    expect(createMonthStructureFlaggingDaysAccordingMonth(testDate)).toEqual(
      expectedResult
    );
  });
});
