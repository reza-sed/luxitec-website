import React from "react";
import classes from "./icon.module.css";

export default function Icon({ name }) {
  let iconPath = `/images/sites/sprite.svg#${name}`;

  return (
    <span className={classes.icon}>
      <svg className="icon">
        <use xlinkHref={iconPath}></use>
      </svg>
    </span>
  );
}
