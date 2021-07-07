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
      <select onChange={handleChange} defaultValue="en-US">
        <option value="en-US">En</option>
        <option value="de-DE">De</option>
      </select>
    </span>
  );
}
