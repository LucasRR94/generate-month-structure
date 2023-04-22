import {
  getInitialDayOfMonth,
  getMonthArray,
  getTheSizeOfMonthInDays,
  getTheAmountOfWeeksNecessaryForTheMonthStructure,
} from './utils';
import {getPreviousMonthSlice} from './getPreviousMonthSlice';
import {getNextMonthSlice} from './getNextMonthSlice';

export const createMonthStructure = (date: Date): Array<number> => {
  const initialDayOfMonth = getInitialDayOfMonth(date);
  let previousMonth: Array<number> = [];
  const currentMonth: Array<number> = getMonthArray(date);
  let nextMonth: Array<number> = [];
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
    previousMonth = getPreviousMonthSlice(date, initialDayOfMonth);
  }
  if (quantityOfEmptyPositionsAfterCurrentMonth > 0) {
    nextMonth = getNextMonthSlice(quantityOfEmptyPositionsAfterCurrentMonth);
  }
  return [...previousMonth, ...currentMonth, ...nextMonth];
};
