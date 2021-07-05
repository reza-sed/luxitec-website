import React from "react";
import classes from "./search-box.module.css";
import Icon from "./icon";
import { ICONS } from "../../constants/icons";

export default function SearchBox() {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="search" />
      <Icon name={ICONS.magnifier} />
    </div>
  );
}
