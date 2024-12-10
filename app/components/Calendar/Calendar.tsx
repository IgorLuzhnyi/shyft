"use client";

import React, { useState, Fragment, use } from "react";
import { DAYS } from "@/app/constants/days";
import { EMPLOYEES } from "@/app/constants/employees";
import { SHIFTS } from "@/app/constants/shifts";

export default function Calendar() {
  const [shifts, setShifts] = useState(SHIFTS);

  return (
    <div className={`mt-6 grid grid-cols-8`}>
      <div className="h-14 border-t border-b border-gray-200 flex justify-center items-center">
        Resercher
      </div>
      {DAYS.map((day, i) => (
        <div
          key={i}
          className={`h-14 border-t border-b border-l border-gray-200 flex justify-center items-center font-bold`}
        >
          {`${day} 0${i + 2}`}
        </div>
      ))}
      {EMPLOYEES.map((employee, i) => (
        <Fragment key={i}>
          <div className="border-b border-l border-gray-200">
            <div
              className="flex items-center min-h-10"
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
          {DAYS.map((day) => (
            <div className="py-2 border-b border-l p-2 flex justify-center items-center"></div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
