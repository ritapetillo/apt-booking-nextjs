import Image from "next/image";
import React from "react";

const DestinationCard = ({ location, distance, img }) => {
  return (
    <div className="flex space-x-3 my-4 p-4 mr-2 cursor-pointer hover:bg-gray-100 rounded-xl hover:scale-105 transition-all ease-out duration-200">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col justify justify-center">
        <span className="font-bold">{location}</span>
        <span>{distance}</span>
      </div>
    </div>
  );
};

export default DestinationCard;
