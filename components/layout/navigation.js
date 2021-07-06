import React from "react";
import classes from "./navigation.module.css";
import Link from "next/link";
import Logo from "./logo";
import LangSelect from "../general/lang-select";
import SearchBox from "../general/search-box";

export default function Navigation() {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <Logo cls={classes.logo} />
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
      <div className={classes.func}>
        <LangSelect />
        <SearchBox />
      </div>
    </header>
  );
}
