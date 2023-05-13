import {
  getInitialDayOfMonth,
  getMonthArray,
  getTheSizeOfMonthInDays,
  getTheAmountOfWeeksNecessaryForTheMonthStructure,
  Day,
  BellongMonth,
} from './utils';
import {getPreviousMonthSlice} from './getPreviousMonthSlice';
import {getNextMonthSlice} from './getNextMonthSlice';

export const createMonthStructureFlaggingDaysAccordingMonth = (
  date: Date
): Array<Day> => {
  const initialDayOfMonth = getInitialDayOfMonth(date);
  let previousMonth: Array<Day> = [];
  const currentMonth: Array<Day> = getMonthArray(date).map(currentDay => {
    const day: Day = {content: currentDay, flagging: BellongMonth.current};
    return day;
  });
  let nextMonth: Array<Day> = [];
  const previousMonthPlusCurrentMonth: number =
    getTheSizeOfMonthInDays(date) + initialDayOfMonth;
  const quantityOfWeeksNecessaryToRepresentTheMonth: number =
    getTheAmountOfWeeksNecessaryForTheMonthStructure(
      currentMonth.length,
      initialDayOfMonth
    );
  const quantityOfEmptyPositionsAfterCurrentMonth: number =
    quantityOfWeeksNecessaryToRepresentTheMonth * 7 -
    previousMonthPlusCurrentMonth;
  if (initialDayOfMonth > 0) {
    previousMonth = getPreviousMonthSlice(date, initialDayOfMonth).map(
      currentMonth => {
        const day: Day = {
          content: currentMonth,
          flagging: BellongMonth.previous,
        };
        return day;
      }
    );
  }
  if (quantityOfEmptyPositionsAfterCurrentMonth > 0) {
    nextMonth = getNextMonthSlice(
      quantityOfEmptyPositionsAfterCurrentMonth
    ).map(currentMonth => {
      const day: Day = {
        content: currentMonth,
        flagging: BellongMonth.next,
      };
      return day;
    });
  }
  return [...previousMonth, ...currentMonth, ...nextMonth];
};
