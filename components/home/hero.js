import React from "react";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <section>
        <h1>LUXITEC</h1>
        <p>
          multinational technology conglomerate developing, manufacturing, and
          selling networking hardware, telecommunications equipment, and other
          high-technology services and products.
        </p>
        <a className="btn btn--accent" href="#">
          Read more
        </a>
      </section>
      <seciotn className={classes.social}></seciotn>
    </div>
  );
}
