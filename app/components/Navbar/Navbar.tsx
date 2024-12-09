import React from "react";
import SectionsSelect from "./SectionsSelect";
import NavbarTabs from "./NavbarTabs";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="py-2 px-4 flex justify-between">
      <div className="flex gap-3 items-center">
        <p className="px-6 font-extrabold text-2xl">shyft</p>
        <div className="w-[1px] flex justify-center items-center">
          <div className="bg-gray-200 pl-[1px] h-3"></div>
        </div>
        <div>
          <SectionsSelect />
        </div>
        <div>
          <NavbarTabs />
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-400 text-lg">
        <FaSearch className="cursor-pointer text-lg" />
        <IoIosNotifications className="cursor-pointer text-2xl" />
      </div>
    </nav>
  );
}
