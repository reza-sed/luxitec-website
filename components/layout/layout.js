import "normalize.css";
import React, { Fragment } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Hero from "../home/hero";
import classes from "./layout.module.css";
import { useRouter } from "next/router";

export default function Layout(props) {
  const { pathname } = useRouter();

  return (
    <Fragment>
      {pathname === "/" ? (
        <div className={classes.splash}>
          <Navigation path={pathname} />
          <Hero />
        </div>
      ) : (
        <div className={classes.normal}>
          <Navigation path={pathname} />
        </div>
      )}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
