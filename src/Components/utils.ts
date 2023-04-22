export const getTheAmountOfWeeksNecessaryForTheMonthStructure = (
  numberOfDays: number,
  initialDayOfWeek: number
): number => Math.ceil((numberOfDays + (initialDayOfWeek - 1)) / 7);

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
