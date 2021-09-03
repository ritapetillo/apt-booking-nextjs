import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        height="300px"
        layout="fill"
        objectFit="cover"
        src="https://links.papareact.com/0fm"
        alt="banner"
      />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
        <p className="text-gray-800 text-lg mb-4">
          Not sure where to go? Perfect
        </p>
        <button className="py-4 bg-white text-xl rounded-full inline-block w-[200px] shadow-md text-pu text-pink-600 font-semibold cursor-pointer transition-all hover:shadow-xl active:scale-95">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
