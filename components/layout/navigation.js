import React from "react";
import classes from "./navigation.module.css";
import Link from "next/link";
import Logo from "./logo";
import LangSelect from "../general/lang-select";

export default function Navigation() {
  return (
    <header className={classes.header}>
      <Logo />
      <nav className={classes.navigation}>
        <ul className={classes.mainmenu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#About-us">About us</a>
          </li>
          <li>
            <a href="#Contact-us">Contact us</a>
          </li>
        </ul>
      </nav>
      <span>
        <LangSelect />
        <svg class="icon">
          <use xlinkHref="/images/sites/sprite.svg#magnifying-glass"></use>
        </svg>
      </span>
    </header>
  );
}
