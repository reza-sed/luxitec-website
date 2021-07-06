import { Fragment } from "react";
import Aboutus from "../components/home/aboutus";
import Hero from "../components/home/hero";
import Services from "../components/home/services";
import Contactus from "../components/home/contact-us";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Aboutus />
      <Contactus />
    </Fragment>
  );
}
