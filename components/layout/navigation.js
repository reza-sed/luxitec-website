import React from "react";
import classes from "./navigation.module.css";

import Logo from "./logo";

export default function Navigation() {
  return (
    <header className={classes.header}>
      <Logo />
      <nav></nav>
    </header>
  );
}
