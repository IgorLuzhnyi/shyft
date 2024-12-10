interface Shift {
  userId: number;
  day: string;
  time: string;
  compensation: string;
}

export const SHIFTS: Shift[] = [
  {
    userId: 2,
    day: "Lun",
    time: "7:00 - 15:00",
    compensation: "$400",
  },
  {
    userId: 1,
    day: "Mer",
    time: "7:00 - 15:00",
    compensation: "$600",
  },
];
