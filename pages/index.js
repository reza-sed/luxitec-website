import { Fragment } from "react";
import Aboutus from "../components/home/aboutus";
import Hero from "../components/home/hero";
import Services from "../components/home/services";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Aboutus />
    </Fragment>
  );
}
