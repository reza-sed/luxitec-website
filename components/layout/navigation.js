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
            <Link href="/#Services">Services</Link>
          </li>
          <li>
            <Link href="/#About-us">About us</Link>
          </li>
          <li>
            <Link href="#Contact-us">Contact us</Link>
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
