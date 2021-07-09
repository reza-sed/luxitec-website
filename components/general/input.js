import React from "react";
import classes from "./input.module.css";

export default function Input({
  placeholder,
  name,
  changeHandler,
  value,
  blurHandler,
}) {
  const classNames = ``;
  return (
    <span>
      <input
        name={name}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={value}
        className={classes.input}
        type="text"
        placeholder={placeholder}
      />
    </span>
  );
}
