import React from "react";
import Image from "next/image";
import classes from "./logo.module.css";

export default function Logo() {
  return (
    <span className={classes.logo}>
      <Image
        src={"/images/sites/logo.png"}
        width={89}
        height={89}
        alt="LUXITEC Logo"
      />
    </span>
  );
}
