export const getTheAmountOfWeeksNecessaryForTheMonthStructure = (
  numberOfDays: number,
  initialDayOfWeek: number
): number => Math.ceil((numberOfDays + initialDayOfWeek) / 7);

export const getANumberArray = (
  sizeOfArray: number,
  initialNumber = 0
): Array<number> =>
  Array.from({length: sizeOfArray}).map(
    (_, index: number): number => initialNumber + index
  );

export const getMonthArray = (date: Date): Array<number> =>
  getANumberArray(getTheSizeOfMonthInDays(date), 1);

export const getTheSizeOfMonthInDays = (date: Date): number =>
  new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0).getDate();

export const getInitialDayOfMonth = (date: Date): number => date.getUTCDay();

export enum BellongMonth {
  previous = 'previous',
  current = 'current',
  next = 'next',
}

export interface Day {
  content: number;
  flagging: BellongMonth;
}
