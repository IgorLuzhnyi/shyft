"use client";

import React, { useState, useEffect, Fragment } from "react";
import { DAYS } from "@/app/constants/days";
import { EMPLOYEES } from "@/app/constants/employees";
import { SHIFTS } from "@/app/constants/shifts";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Shift } from "@/app/types/types";
import DayCard from "./DayCard";

export default function Calendar() {
  const [shifts, setShifts] = useState(SHIFTS);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDragEng = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const shiftId = active.id as string;
    const newDay = over.id as Shift["day"];

    setShifts(() =>
      shifts.map((shift) =>
        shift.shiftId === shiftId
          ? {
              ...shift,
              day: newDay,
            }
          : shift
      )
    );
  };

  return (
    <div className={`mt-6 grid grid-cols-9`}>
      <div className="h-14 border-t border-r border-gray-200 flex justify-center items-center">
        Resercher
      </div>
      {DAYS.map((day, i) => (
        <div
          key={day.id}
          className={`h-14 border-t border-r border-gray-200 flex justify-center items-center font-bold`}
        >
          {`${day.title} 0${i + 2}`}
        </div>
      ))}
      <div></div>
      {EMPLOYEES.map((employee) => (
        <Fragment key={employee.userId}>
          <div className="border-t border-r border-gray-200">
            <div
              className="flex items-center min-h-10 h-full"
              style={{
                borderLeft: "6px",
                borderStyle: "solid",
                borderColor: "#E4B16A",
              }}
            >
              <div className="mx-4 my-4 flex gap-2">
                <img
                  src={employee.profilePhoto}
                  alt="employee-logo"
                  className="border border-gray-400 w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <p className="text-sm">
                    {employee.firstName} {employee.lastName}
                  </p>
                  <p className="text-xs text-gray-500">{employee.role}</p>
                </div>
              </div>
            </div>
          </div>
          {isClient && (
            <DndContext onDragEnd={handleDragEng}>
              {DAYS.map((day) => (
                <DayCard
                  key={day.id}
                  day={day}
                  shifts={shifts.filter(
                    (shift) =>
                      shift.userId === employee.userId &&
                      shift.day === day.title
                  )}
                />
              ))}
            </DndContext>
          )}
          <div className="border-t"></div>
        </Fragment>
      ))}
    </div>
  );
}
