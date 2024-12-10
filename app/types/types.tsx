export interface Employee {
  firstName: string;
  lastName: string;
  userId: string;
  role: string;
  profilePhoto: string;
}

export interface Shift {
  shiftId: string;
  userId: string;
  day: string;
  time: string;
  compensation: string;
}
