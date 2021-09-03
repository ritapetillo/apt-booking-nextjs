import Head from "next/head";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
import LiveEverywhere from "../components/LiveEverywhere";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Home({ destinations, liveEverywhereData }) {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>App</h1> */}
      <Banner />
      <Explore destinations={destinations} />
      <LiveEverywhere liveEverywhereData={liveEverywhereData} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://links.papareact.com/pyp");
  const destinations = await res.json();
  const res2 = await fetch("https://links.papareact.com/zp1");
  const liveEverywhereData = await res2.json();
  return {
    props: {
      // props to be passed to the page component
      destinations,
      liveEverywhereData,
    },
  };
}
