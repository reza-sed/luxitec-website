import React, { useState } from "react";
import classes from "./navigation.module.css";
import Link from "next/link";
import Logo from "./logo";
import LangSelect from "../general/lang-select";
import SearchBox from "../general/search-box";
import { useTranslation } from "next-i18next";
import Icon from "../general/icon";

export default function Navigation({ path }) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const { t } = useTranslation("menu");

  const toggleMenu = () => setMenuExpanded(!menuExpanded);

  return (
    <header className={classes.header}>
      <nav
        className={`${classes.navigation} ${
          menuExpanded ? classes.collapsible___extended : ""
        }`}
      >
        <Logo cls={classes.logo} />
        <Icon
          name="menu"
          cls={`${classes.collapsible__icon}`}
          handleClick={toggleMenu}
        />
        <ul className={`${classes.mainmenu} ${classes.collapsible__content}`}>
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
      {/* <div className={classes.func}>
        <LangSelect />
        <SearchBox />
      </div> */}
    </header>
  );
}
