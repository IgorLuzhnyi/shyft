"use client";

import React, { useState } from "react";
import WeekCalendar from "./WeekCalendar";
import { Button } from "@/components/ui/button";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoRocket } from "react-icons/go";
import { ChartColumn } from "lucide-react";

export default function CalendarContainer() {
  const [buttonViewIndex, setButtonViewIndex] = useState<number>(2);

  return (
    <div>
      <div className="h-20 px-3 flex gap-2 items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="flex">
            <div className="flex">
              <Button
                onClick={() => setButtonViewIndex(0)}
                className={`flex h-8 border-l border-t border-b rounded-sm rounded-r-none shadow-none text-gray-500 bg-white hover:bg-gray-200 ${buttonViewIndex === 0 && "text-black bg-gray-200"}`}
              >
                Jour
              </Button>
              <Button
                onClick={() => setButtonViewIndex(1)}
                className={`flex h-8 border-l border-t border-b rounded-none shadow-none text-gray-500 bg-white hover:bg-gray-200 ${buttonViewIndex === 1 && "text-black bg-gray-200"}`}
              >
                OPS
              </Button>
              <Button
                onClick={() => setButtonViewIndex(2)}
                className={`flex h-8 border-l border-t border-b rounded-none shadow-none text-gray-500 bg-white hover:bg-gray-200 ${buttonViewIndex === 2 && "text-black bg-gray-200"}`}
              >
                Semaine
              </Button>
              <Button
                onClick={() => setButtonViewIndex(3)}
                className={`flex h-8 border-r border-t border-b rounded-sm rounded-l-none shadow-none text-gray-500 bg-white hover:bg-gray-200 ${buttonViewIndex === 3 && "text-black bg-gray-200"}`}
              >
                Mois
              </Button>
            </div>
          </div>
          <div className="h-8 w-8 flex justify-center items-center border rounded-sm">
            <div className="h-[10px] w-[16px] p-[1px] flex justify-end bg-black rounded-md cursor-pointer">
              <div className="h-[8px] w-[8px] rounded-full bg-white flex"></div>
            </div>
          </div>
          <p className="text-sm font-medium">S49(1)</p>
        </div>
        <div className="flex gap-x-2 justify-center items-center">
          <SlArrowLeft className="text-xs cursor-pointer" />
          <div className="px-6 py-1 bg-gray-100 border border-gray-200 rounded-sm flex justify-center items-center">
            <p className="text-sm text-gray-500">2 dec. - 8 dec.</p>
          </div>
          <SlArrowRight className="text-xs cursor-pointer" />
        </div>
        <div className="flex gap-x-3 items-center">
          <ChartColumn className="text-gray-500" size={20} />
          <Button className="flex shadow-none items-center text-black bg-gray-200 hover:bg-gray-300">
            <p>Plus</p>
            <IoMdArrowDropdown />
          </Button>
          <Button className="w-9 bg-[#5FCEFF] hover:bg-[#55B9E5]">
            <GoRocket strokeWidth={1.3} />
          </Button>
          <Button className="h-8 w-44 bg-[#5FCEFF] hover:bg-[#55B9E5]">
            Generer PDF
          </Button>
        </div>
      </div>
      <WeekCalendar />
    </div>
  );
}
