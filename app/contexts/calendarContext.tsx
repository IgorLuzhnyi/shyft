"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Employee, Shift } from "../types/types";

// context setup
interface CalendarContextProviderProps {
  children: ReactNode;
}

interface CalendarContextProps {
  employees: Employee[];
  shifts: Shift[];
  setShifts: (value: Shift[]) => void;
  dayNumber: number;
}

const CalendarContext = createContext({} as CalendarContextProps);

export function useCalendarContext() {
  return useContext(CalendarContext);
}

//functions
const getEmployees = async () => {
  const res = await fetch("http://localhost:4000/employees");

  return res.json();
};

const getShifts = async () => {
  const res = await fetch("http://localhost:4000/shifts");

  return res.json();
};

//context provider component
export function CalendarContextProvider({
  children,
}: CalendarContextProviderProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [shifts, setShifts] = useState<Shift[]>([]);

  const now = new Date();
  const dayNumber = now.getDay();

  const fetchData = async () => {
    try {
      const fetchedEmployees = await getEmployees();
      setEmployees(fetchedEmployees);

      const fetchedShifts = await getShifts();
      setShifts(fetchedShifts);
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CalendarContext.Provider
      value={{ employees, shifts, setShifts, dayNumber }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
