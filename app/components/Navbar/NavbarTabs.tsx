"use client";
import { useState } from "react";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaCalendarAlt } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { ChartColumn } from "lucide-react";

export default function NavbarTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex gap-1 text-sm">
      <Button
        onClick={() => setActiveTab(0)}
        className={`px-2 rounded-sm shadow-none uppercase ${
          activeTab === 0
            ? "bg-green-600 text-white hover:bg-green-600"
            : "bg-white text-gray-900 hover:bg-green-600"
        } group`}
      >
        <FaCalendarAlt
          className={
            activeTab === 0
              ? "text-white"
              : "text-green-600 group-hover:text-white"
          }
        />
        <p>Horaires</p>
        <p
          className={`px-2 rounded-xl ${activeTab === 0 ? "bg-white text-gray-900" : "bg-green-600 text-white"}`}
        >
          99+
        </p>
      </Button>
      <Button
        onClick={() => setActiveTab(1)}
        className={`px-2 rounded-sm shadow-none uppercase ${
          activeTab === 1
            ? "bg-green-600 text-white hover:bg-green-600"
            : "bg-white text-gray-900 hover:bg-green-600"
        } group`}
      >
        <RxLapTimer
          className={
            activeTab === 1
              ? "text-white"
              : "text-green-600 group-hover:text-white"
          }
        />
        <p>Pointages</p>
      </Button>
      <Button
        onClick={() => setActiveTab(2)}
        className={`px-2 rounded-sm shadow-none uppercase ${
          activeTab === 2
            ? "bg-green-600 text-white hover:bg-green-600"
            : "bg-white text-gray-900 hover:bg-green-600"
        } group`}
      >
        <FaRegUser
          className={
            activeTab === 2
              ? "text-white"
              : "text-green-600 group-hover:text-white"
          }
        />
        <p>Equipe</p>
        <p
          className={`px-2 rounded-xl ${activeTab === 2 ? "bg-white text-gray-900" : "bg-green-600 text-white"}`}
        >
          1
        </p>
      </Button>
      <Button
        onClick={() => setActiveTab(3)}
        className={`px-2 rounded-sm shadow-none uppercase ${
          activeTab === 3
            ? "bg-green-600 text-white hover:bg-green-600"
            : "bg-white text-gray-900 hover:bg-green-600"
        } group`}
      >
        <ChartColumn
          className={
            activeTab === 3
              ? "text-white"
              : "text-green-600 group-hover:text-white"
          }
        />
        <p>Rapports</p>
      </Button>
      <Button
        onClick={() => setActiveTab(4)}
        className={`px-2 rounded-sm shadow-none uppercase ${
          activeTab === 4
            ? "bg-green-600 text-white hover:bg-green-600"
            : "bg-white text-gray-900 hover:bg-green-600"
        } group`}
      >
        <IoDocumentTextSharp
          className={
            activeTab === 4
              ? "text-white"
              : "text-green-600 group-hover:text-white"
          }
        />
        <p>Documents</p>
      </Button>
    </div>
  );
}
