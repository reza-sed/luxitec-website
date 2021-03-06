import React from "react";
import ContactForm from "./contact-form";
import SocialNetworks from "./social-networks";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ContactForm />
      <SocialNetworks />
      <span>&copy; Copyright {new Date().getFullYear()} LUXITEC</span>
    </footer>
  );
}
