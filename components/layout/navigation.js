import React from "react";
import classes from "./navigation.module.css";
import Link from "next/link";
import Logo from "./logo";
import LangSelect from "../general/lang-select";
import SearchBox from "../general/search-box";
import { useTranslation } from "next-i18next";

export default function Navigation({ path }) {
  const { t } = useTranslation("menu");

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <Logo cls={classes.logo} />
        <ul className={classes.mainmenu}>
          <li className={path === "/" ? classes.active : ""}>
            <Link href="/">{t("Home")}</Link>
          </li>
          <li
            className={path && path.includes("services") ? classes.active : ""}
          >
            <Link href="/#Services">{t("Services")}</Link>
          </li>
          <li>
            <Link href="/#About-us">{t("About us")}</Link>
          </li>
          <li>
            <Link href="/#Contact-us">{t("Contact us")}</Link>
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
