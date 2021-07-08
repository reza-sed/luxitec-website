import React from "react";
import Input from "../general/input";
import Textarea from "../general/textarea";
import PrimaryButton from "../general/primary-button";
import classes from "./contact-form.module.css";
import { useFormik } from "formik";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("DONE");
  };
  const formik = useFormik({ initialValues: {} });

  return (
    <section className={classes.container}>
      <p>If you got any question please do not hesitate to send us a message</p>
      <form onSubmit={handleSubmit}>
        <Input name={"name"} placeholder={"Your Name"} />
        <Input name={"email"} placeholder={"Your Email"} />
        <Input name={"subject"} placeholder={"Subject"} />
        <Textarea name={"message"} placeholder={"Message"} />
        <PrimaryButton cls={classes.cls} type="submit" title={"SUBMIT"} />
      </form>
    </section>
  );
}
