import React from "react";
import classes from "./textarea.module.css";

export default function Textarea({
  name,
  placeholder,
  changeHandler,
  value,
  blurHandler,
}) {
  return (
    <span>
      <textarea
        name={name}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={value}
        className={classes.textarea}
        placeholder={placeholder}
        rows="20"
      />
    </span>
  );
}
