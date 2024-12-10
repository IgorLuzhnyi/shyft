import React from "react";
import SectionsSelect from "./SectionsSelect";
import NavbarTabs from "./NavbarTabs";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { HiMiniCog8Tooth } from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav className="py-2 px-6 flex justify-between shadow-lg border-b-2">
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
      <div className="flex items-center gap-3 text-gray-400">
        <FaSearch className="cursor-pointer text-md" />
        <IoIosNotifications className="cursor-pointer text-xl" />
        <p className="text-gray-800 text-sm">Aide</p>
        <p className="text-gray-800 text-sm">Young & Free</p>
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
            alt="profile-logo"
            className="w-6 h-6 object-cover rounded-full"
          />
          <MdKeyboardArrowDown />
        </div>
        <FaLock className="cursor-pointer text-md" />
        <HiMiniCog8Tooth className="cursor-pointer text-lg" />
      </div>
    </nav>
  );
}
