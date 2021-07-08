import React from "react";
import classes from "./input.module.css";

export default function Input({ placeholder, name }) {
  return (
    <span>
      <input
        name={name}
        className={classes.input}
        type="text"
        placeholder={placeholder}
      />
    </span>
  );
}
