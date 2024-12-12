export interface Employee {
  firstName: string;
  lastName: string;
  userId: string;
  role: string;
  profilePhoto: string;
}

export interface Day {
  title: string;
  id: string;
}

interface ShiftType {
  title: string;
  bgColor: string;
}

export interface Shift {
  shiftId: string;
  userId: string;
  day: string;
  time: string;
  shiftType: ShiftType;
  paidHours: string;
  unpaidHours: string;
  rate: string;
}
