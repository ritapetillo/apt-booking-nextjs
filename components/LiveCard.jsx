import React from "react";
import Image from "next/image";

const LiveCard = ({ img, title }) => {
  console.log(img);
  return (
    <div className="hover:scale-105 transition ease-out duration-200 ">
      <div className="relative w-80 h-80 rounded-lg">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h4 className="mt-2 font-bold">{title}</h4>
    </div>
  );
};

export default LiveCard;
