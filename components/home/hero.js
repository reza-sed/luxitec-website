import React from "react";
import { ICONS } from "../../constants/icons";
import Icon from "../general/icon";

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
      <seciotn className={classes.social}>
        <span className={classes.vline}></span>
        <Icon name={ICONS.instagram} cls={classes.social__item} />
        <Icon name={ICONS.facebook} cls={classes.social__item} />
        <Icon name={ICONS.linkedin} cls={classes.social__item} />
        <Icon name={ICONS.twitter} />
      </seciotn>
    </div>
  );
}
