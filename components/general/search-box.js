import React from "react";
import classes from "./search-box.module.css";

export default function SearchBox() {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="search" />
      <svg className="icon">
        <use xlinkHref="/images/sites/sprite.svg#magnifying-glass"></use>
      </svg>
    </div>
  );
}
