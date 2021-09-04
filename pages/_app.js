import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import "../styles/global.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 3,
  color: "#FE595E",
  className: "bar-of-progress z-50",
  delay: 100,
});

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => progress.start());
  Router.events.on("routeChangeComplete", (url) => progress.finish());
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
