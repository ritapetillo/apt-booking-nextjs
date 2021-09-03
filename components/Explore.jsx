import React from "react";
import DestinationCard from "./DestinationCard";

const Explore = ({ destinations }) => {
  return (
    <div className="max-w-7xl mx-auto w-11/12 px-5">
      <h3 className="text text-4xl font-bold my-8">Explore nearby</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {destinations?.map((d, index) => (
          <DestinationCard
            key={index}
            location={d.location}
            distance={d.distance}
            img={d.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
