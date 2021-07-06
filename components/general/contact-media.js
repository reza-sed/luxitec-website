import React from "react";
import Icon from "./icon";
import classes from "./contact-media.module.css";

export default function ContactMedia({ title, detail, icon }) {
  return (
    <span>
      <Icon name={icon} cls={classes.icon} />
      <div className={classes.title}>{title}</div>
      <div className={classes.detail}>{detail}</div>
    </span>
  );
}
