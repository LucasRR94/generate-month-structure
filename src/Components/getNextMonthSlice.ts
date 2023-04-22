import {getANumberArray} from './utils';

export const getNextMonthSlice = (
  numberOfEmptyDaysAfterMonth: number
): Array<number> => getANumberArray(numberOfEmptyDaysAfterMonth, 1);
