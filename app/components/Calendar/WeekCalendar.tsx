"use client";

import React, { useState, useEffect, Fragment } from "react";
import { useCalendarContext } from "@/app/contexts/calendarContext";
import { DAYS } from "@/app/constants/days";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Shift } from "@/app/types/types";
import DayCard from "./DayCard";
import { AVAILABITIES, CALCULATIONS } from "@/app/constants/dummyData";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export default function WeekCalendar() {
  const { employees, shifts, setShifts, dayNumber } = useCalendarContext();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDragEng = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const shiftId = active.id as string;
    const newDay = over.id as Shift["day"];

    const updatedShifts = () =>
      shifts.map((shift: Shift) =>
        shift.shiftId === shiftId
          ? {
              ...shift,
              day: newDay,
            }
          : shift
      );

    setShifts(updatedShifts());
  };

  return (
    <div className={`grid grid-cols-9`}>
      <Fragment>
        <div className="h-14 p-3 border-t border-r border-gray-200 bg-[#F6F8FC] flex justify-center items-center">
          <input
            readOnly
            value={"Rechercher"}
            className="p-1 px-4 border bg-[#F6F8FC] outline-none text-sm text-gray-500 w-full"
          />
        </div>
        {DAYS.map((day, i) => (
          <div
            key={day.id}
            className={`h-14 border-t border-r border-gray-200 ${dayNumber === i + 1 ? "bg-[#E3E6F1]" : "bg-[#F8F9FF]"} ${i === DAYS.length - 1 && "rounded-tr-xl"} flex justify-center items-center font-bold`}
          >
            {`${day.title} 0${i + 2}`}
          </div>
        ))}
        <div></div>
      </Fragment>
      <Fragment>
        <div className="h-12 px-3 flex gap-3 items-center bg-[#F2FFF8] border-t border-r border-gray-200">
          <p className="text-sm font-medium">Shifts disponibles</p>
          <div className="flex items-center p-[2px] h-[18px] w-[28px] bg-[#B7BEB9] rounded-xl cursor-pointer">
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
        </div>
        {AVAILABITIES.map((availability, i) => (
          <div
            key={i}
            className="flex justify-center items-center bg-[#F2FFF8] border-t border-r border-gray-200"
          >
            <p
              className={
                availability && "px-2 w-8 text-center rounded-md bg-[#D9E5E1]"
              }
            >
              {availability}
            </p>
          </div>
        ))}
        <div></div>
      </Fragment>
      <Fragment>
        <div className="p-2 py-3 flex items-center bg-[#FED097] border-t border-r border-gray-200">
          <div className="flex gap-1 items-center">
            <p className="p-1 bg-[#E76F59] text-white text-xs rounded-sm">
              296h45/120h
            </p>
            <p className="p-1 bg-[#D7B37D] text-white text-xs rounded-sm">
              3.145€
            </p>
            <IoInformationCircleSharp />
          </div>
        </div>
        {CALCULATIONS.map((calc, i) => (
          <div
            key={i}
            className="p-2 flex justify-center items-center bg-[#FED097] border-t border-r border-gray-200"
          >
            <div className="flex gap-1 items-center">
              <p
                className={`p-1 bg-[${calc.color}] text-white text-xs rounded-sm`}
              >
                {calc.hours}
              </p>
              <p className="p-1 bg-[#D7B37D] text-white text-xs rounded-sm">
                {calc.rate}
              </p>
              <div className="flex gap-1 items-center">
                <FaRegUser size={14} />
                <p className="text-xs">{calc.occupation}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center border-t border-gray-200 bg-[#E3E6F1]">
          <p className="font-bold text-sm">Compteurs</p>
        </div>
      </Fragment>
      {employees.map((employee) => (
        <Fragment key={employee.userId}>
          <div className="border-t border-r border-gray-200">
            <div
              className="flex items-center min-h-10 h-full"
              style={{
                borderLeft: "6px",
                borderStyle: "solid",
                borderColor:
                  employee.role === "etudiant" ? "#89C149" : "#E4B16A",
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
