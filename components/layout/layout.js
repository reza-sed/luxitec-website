import "normalize.css";
import React, { Fragment } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Hero from "../home/hero";

import classes from "./layout.module.css";

export default function Layout(props) {
  return (
    <Fragment>
      {props.path === "/" ? (
        <div className={classes.splash}>
          <Navigation path={props.path} />
          <Hero />
        </div>
      ) : (
        <div className={classes.normal}>
          <Navigation />
        </div>
      )}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
