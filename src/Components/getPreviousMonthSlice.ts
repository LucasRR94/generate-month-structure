import {getANumberArray, getTheSizeOfMonthInDays} from './utils';

export const getPreviousMonthSlice = (
  date: Date,
  numberOfEmptyDaysBeforeNextMonth: number
): Array<number> => {
  const lastMonth = new Date(date.getTime());
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const numberOfDaysPresentOnTheLastMonth = getTheSizeOfMonthInDays(lastMonth);
  const startingDayOfPreviousMonth =
    numberOfDaysPresentOnTheLastMonth + 1 - numberOfEmptyDaysBeforeNextMonth;
  return getANumberArray(
    numberOfEmptyDaysBeforeNextMonth,
    startingDayOfPreviousMonth
  );
};
