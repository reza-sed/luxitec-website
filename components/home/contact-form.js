import React from "react";
import Input from "../general/input";
import Textarea from "../general/textarea";
import PrimaryButton from "../general/primary-button";
import Icon from "../general/icon";
import classes from "./contact-form.module.css";
import { ICONS } from "../../constants/icons";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("DONE");
  };

  return (
    <section className={classes.container}>
      <p>If you got any question please do not hesitate to send us a message</p>
      <form onSubmit={handleSubmit}>
        <Input placeholder={"Your Name"} />
        <Input placeholder={"Your Email"} />
        <Input placeholder={"Subject"} />
        <Textarea placeholder={"Message"} />
        <PrimaryButton cls={classes.cls} type="submit" title={"SUBMIT"} />
        <div className={classes.socialmedia}>
          <Icon name={ICONS.instagram} cls={classes.socialmedia__item} />
          <Icon name={ICONS.facebook} cls={classes.socialmedia__item} />
          <Icon name={ICONS.linkedin} cls={classes.socialmedia__item} />
          <Icon name={ICONS.twitter} cls={classes.socialmedia__item} />
        </div>
      </form>
    </section>
  );
}
