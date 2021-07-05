import React from "react";
import classes from "./lang-select.module.css";

export default function LangSelect() {
  return (
    <span className={classes.container}>
      <select defaultValue="En">
        <option value="En">En</option>
        <option value="De">De</option>
      </select>
    </span>
  );
}
