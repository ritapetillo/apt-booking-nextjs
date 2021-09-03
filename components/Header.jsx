import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
      {/* logo section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex justify-between items-center border-solid border-gray-300 border px-4 py-1 rounded- rounded-full shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="bg-transparent outline-none flex-grow mr-2"
        />
        <SearchIcon className="h-6 bg-red-400 p-1 rounded-full text-white hidden md:inline-flex" />
      </div>
      {/* right */}
      <div className="flex justify-end items-center">
        <span className="hidden md:inline-block text-sm py-2 px-3 rounded-full cursor-pointer transition-all hover:bg-gray-100">
          Become a host
        </span>
        <GlobeAltIcon className="h-9 text-gray-700 mr-5 ml-2 p-2 rounded-full cursor-pointer hover:bg-gray-100" />
        <span className="flex items-center border border-gray-300 rounded-full px-2 py-1 cursor-pointer hover:shadow-md">
          <MenuIcon className="h-4" />
          <UserCircleIcon className="h-9 ml-2 text-gray-500 " />
        </span>
      </div>
    </header>
  );
}

export default Header;
