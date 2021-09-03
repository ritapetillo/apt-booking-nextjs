import React from "react";
import LiveCard from "./LiveCard";

const LiveEverywhere = ({ liveEverywhereData }) => {
  console.log(liveEverywhereData);

  return (
    <div className="max-w-7xl mx-auto w-11/12 px-5">
      <h3 className="text text-4xl font-bold my-8">Liver Everywhere</h3>
      <div className="flex p-4 -ml-4 space-x-3 overflow-x-scroll scrollbar-hide">
        {liveEverywhereData.map((liveEverywhere, index) => (
          <LiveCard
            img={liveEverywhere.img}
            title={liveEverywhere.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default LiveEverywhere;
