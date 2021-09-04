import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex-grow flex flex-col pl-5">
        <div className="flex justify-between">
          <span className="text-gray-500">{location}</span>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <span className="text-xl">{title}</span>
        <div className="w-10 border-b pt-2"></div>
        <span className="text-sm pt-2 text-gray-500">{description}</span>
        <div className="flex justify-between items items-end mt-auto">
          <div className="flex items-center">
            <StarIcon className="h-4 text-red-400" />
            {star}
          </div>
          <div>
            <p className="text-xl">{price}</p>
            <p className="text-gray-500">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
