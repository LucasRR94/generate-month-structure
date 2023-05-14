# Generate Month Structure

This library have as objective generate a month structure according to the month and
year. The month generate have the necessary rows and is fulfilled with the previous
and the next month on the empty positions. The main advantage of this library is that
it complete lack of third packages for generate the month.

## Features:

- Generate the month structure with all the days of the necessary rows for represent the month fulfilled with the previous and the next month

## Installation:

This library could be installed using npm as:

```
    npm install generate-month-structure
```

## Usage

The lib export a object with the function `createMonthStructure`, that requeries a js Date object, and return the full structure of the current month,
with the required rows of the current month passed to the `createMonthStructure`, and the remaining days of the previous and the next month.Therefore
an array with all the rows necessary for represent the current month are returned, including previous and next positions of the current month filled.

```

    const { createMonthStructure } = require("generate-month-structure");
    const currentMonth = createMonthStructure(new Date(2023, 03, 01));

```

In the above example, the current month passed is **2023-04-01**, and will return the structure of all rows of the current month, and the remaining days
of the previous month **2023-03**, and the next month **2023-05** that are empty in the necessary rows for display the current month.
The array returned will be:

```

[
26, 27, 28, 29, 30, 31, 1, 2, 3, 4,
5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
25, 26, 27, 28, 29, 30, 1, 2, 3, 4,
5, 6
]
```

The lib export the function `createMonthStructureFlaggingDaysAccordingMonth` that return an array with the similar struture as `createMonthStructure`, but instead of numbers, it returns a interface called Day, that contains the content(the day number),
and the flagging, that is a enum, that inform if the months is previous, current or next month. This feature could be used for
generate different behaviours, according to the flagging status.

```

interface Day {
content: number;
flagging: BellongMonth;
}

```

The Day interface as the enum BellongMonth are exported by this package, and can being access and used in typescript projects. Above the BellongMonth enum description:

```

export enum BellongMonth {
  previous = 'previous',
  current = 'current',
  next = 'next',
}

```

## Tecnologies Used:

- Typescript
- Jest

### Author

Lucas Rocha [github](https://github.com/LucasRR94)
