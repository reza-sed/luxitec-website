import React, { Fragment } from "react";
import "normalize.css";
import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
