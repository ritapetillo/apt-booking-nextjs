import React, { useMemo } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const {
    query: { location, endDate, startDate, guests },
  } = router;
  // const {location,endDate,startDate,guests} = query;
  const startDateFormat = useMemo(() => {
    if (startDate) {
      return format(new Date(startDate), "dd/MM/yyyy");
    }
    return null;
  });
  return (
    <div>
      <main className="flex">
        <section className="pt-14 px-6 flex-grow">
          <p className="text-xs">300+ Stays for {guests} number of guests</p>
          <h2 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location} from {startDateFormat} to {endDate}
          </h2>
          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <span className="button"> Cancellation Flexibility</span>
            <span className="button"> Type of placey</span>
            <span className="button"> Price</span>
            <span className="button"> Rooms and Beds</span>
            <span className="button"> More filters</span>
          </div>
          {searchResults.map((result) => (
            <InfoCard
              img={result.img}
              location={result.location}
              title={result.title}
              description={result.description}
              star={result.star}
              price={result.price}
              total={result.total}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://links.papareact.com/isz");
  const searchResults = await res.json();
  return {
    props: {
      searchResults,
    },
  };
}

export default Search;
