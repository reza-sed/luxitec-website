import "normalize.css";
import React, { Fragment } from "react";
import Navigation from "./navigation";
import Hero from "../home/hero";
import Footer from "./footer";

import classes from "./layout.module.css";

export default function Layout(props) {
  return (
    <Fragment>
      <div className={classes.layout}>
        <Navigation />
        <Hero />
      </div>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
