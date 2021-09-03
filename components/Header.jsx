import React, { useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(0);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
    console.log(range);
  };

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
          value={searchInput}
          onChange={handleChangeInput}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={"#FD5B61"}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={guests}
              className="w-10 outline-none ml-4 text-lg"
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="flex py-2">
            <button className="text-grey-500 flex-grow">Cancel</button>
            <button className="text-red-500 flex-grow">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
