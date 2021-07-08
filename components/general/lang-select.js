import { useRouter } from "next/router";
import React from "react";
import classes from "./lang-select.module.css";

export default function LangSelect() {
  const router = useRouter();

  function handleChange(e) {
    router.push("/", "/", { locale: e.target.value });
  }

  return (
    <span className={classes.container}>
      <select onChange={handleChange} value={router.locale}>
        <option value="en">En</option>
        <option value="de">De</option>
      </select>
    </span>
  );
}
