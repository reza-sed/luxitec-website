import React from "react";

export default function PrimaryButton({ type, title, cls }) {
  const classNames = cls ? `btn btn--accent ${cls}` : `btn btn--accent`;

  return type === "submit" ? (
    <button type="submit" className={classNames}>
      {title}
    </button>
  ) : (
    <a className={classNames} href="#">
      {title}
    </a>
  );
}
