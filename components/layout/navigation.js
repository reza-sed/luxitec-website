import React from "react";
import classes from "./navigation.module.css";

export default function Navigation() {
  return (
    <header className={classes.header}>
      <Logo />
      <nav></nav>
    </header>
  );
}
