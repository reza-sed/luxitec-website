import React from "react";
import classes from "./input.module.css";

export default function Input({ placeholder }) {
  return (
    <span>
      <input className={classes.input} type="text" placeholder={placeholder} />
    </span>
  );
}
