import React from "react";
import { ICONS } from "../../constants/icons";
import Icon from "../general/icon";
import classes from "./social-networks.module.css";

export default function SocialNetworks() {
  return (
    <div className={classes.socialmedia}>
      <Icon name={ICONS.instagram} cls={classes.socialmedia__item} />
      <Icon name={ICONS.facebook} cls={classes.socialmedia__item} />
      <Icon name={ICONS.linkedin} cls={classes.socialmedia__item} />
      <Icon name={ICONS.twitter} cls={classes.socialmedia__item} />
    </div>
  );
}
