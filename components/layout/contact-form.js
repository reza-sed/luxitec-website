import React, { useState } from "react";
import Input from "../general/input";
import Textarea from "../general/textarea";
import PrimaryButton from "../general/primary-button";
import classes from "./contact-form.module.css";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formResponse, setFormResponse] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values) => {
      const rawResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (rawResponse.ok) {
        const { message } = await rawResponse.json();
        toast(message);
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = `Please provide your great Name!`;
      }

      if (!values.email) {
        errors.email = "So how could we get in touch with you?!";
      }

      if (!values.message) {
        errors.message = "Is is awesome to hear from you!!!";
      } else if (
        !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          values.email.toLowerCase()
        )
      ) {
        errors.email = "Sorry, it seems that your email is incorrect!";
      }

      return errors;
    },
  });

  return (
    <section className={classes.container}>
      <p>If you got any question please do not hesitate to send us a message</p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          name={"name"}
          placeholder={"Your Name"}
          value={formik.values.name}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className={classes.error}>{formik.errors.name}</div>
        ) : null}
        <Input
          name={"email"}
          placeholder={"Your Email"}
          value={formik.values.email}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div className={classes.error}>{formik.errors.email}</div>
        ) : null}
        <Input
          name={"subject"}
          placeholder={"Subject"}
          value={formik.values.subject}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        {formik.errors.subject && formik.touched.subject ? (
          <div className={classes.error}>{formik.errors.subject}</div>
        ) : null}
        <Textarea
          name={"message"}
          placeholder={"Message"}
          value={formik.values.message}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        {formik.errors.message && formik.touched.message ? (
          <div className={classes.error}>{formik.errors.message}</div>
        ) : null}
        <PrimaryButton cls={classes.cls} type="submit" title={"SUBMIT"} />
      </form>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
            fontSize: "1.5rem",
          },
        }}
      />
    </section>
  );
}
