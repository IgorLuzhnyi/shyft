import { EMPLOYEE } from "../types/types";
import { v4 as uuidv4 } from "uuid";

export const EMPLOYEES: EMPLOYEE[] = [
  {
    firstName: "Alexandre",
    lastName: "Timmermans",
    userId: uuidv4(),
    role: "Employee",
  },
  {
    firstName: "Eloise",
    lastName: "Leroy",
    userId: uuidv4(),
    role: "Employee",
  },
  {
    firstName: "Samuel",
    lastName: "Goossens",
    userId: uuidv4(),
    role: "Employee",
  },
  {
    firstName: "Camille",
    lastName: "Delangre",
    userId: uuidv4(),
    role: "etudiant",
  },
  {
    firstName: "Camille",
    lastName: "Evrard",
    userId: uuidv4(),
    role: "etudiant",
  },
  {
    firstName: "Elena",
    lastName: "Dimou",
    userId: uuidv4(),
    role: "Employee",
  },
  {
    firstName: "Emile",
    lastName: "Lahdo",
    userId: uuidv4(),
    role: "etudiant",
  },
];
