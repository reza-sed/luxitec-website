import React from "react";
import classes from "./icon.module.css";

export default function Icon({ name, cls }) {
  let iconPath = `/images/sites/sprite.svg#${name}`;
  const classNames = cls ? `icon ${cls}` : `icon`;

  return (
    <span className={classes.icon}>
      <svg className={classNames}>
        <use xlinkHref={iconPath}></use>
      </svg>
    </span>
  );
}
