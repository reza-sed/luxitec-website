import React from "react";
import classes from "./contact-us.module.css";
import ContactMedia from "../general/contact-media";
import { ICONS } from "../../constants/icons";

export default function Contactus() {
  return (
    <section id="Contact-us" className={classes.container}>
      <h2>Contact us</h2>
      <p>get in touch with us</p>
      <div className={classes.contact}>
        <ContactMedia
          title={"phone"}
          detail={"+9845767256"}
          icon={ICONS.call}
        />
        <ContactMedia
          title={"email"}
          detail={"r.sedighi@gmail.com"}
          icon={ICONS.email}
        />
      </div>
    </section>
  );
}
