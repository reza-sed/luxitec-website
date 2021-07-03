import Document, { Head, NextScript, Main, Html } from "next/document";
import React, { Component } from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
