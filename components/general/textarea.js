import React from "react";
import classes from "./textarea.module.css";

export default function Textarea({ placeholder }) {
  return (
    <span>
      <textarea
        className={classes.textarea}
        placeholder={placeholder}
        rows="20"
      />
    </span>
  );
}
