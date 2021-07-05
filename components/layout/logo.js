import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <span className={classes.logo}>
      <Image width={89} height={89} alt="LUXITEC Logo" />
    </span>
  );
}
