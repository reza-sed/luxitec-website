import { useTranslation } from "next-i18next";
import React from "react";
import { ICONS } from "../../constants/icons";
import Icon from "../general/icon";
import PrimaryButton from "../general/primary-button";
import classes from "./hero.module.css";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <div className={classes.hero}>
      <section className={classes.hero__content}>
        <h1>LUXITEC</h1>
        <p>{t("Hero paragraph")}</p>
        <PrimaryButton title={t("Read more")} />
      </section>
      <section className={classes.social}>
        <span className={classes.vline}></span>
        <Icon name={ICONS.instagram} />
        <Icon name={ICONS.facebook} />
        <Icon name={ICONS.linkedin} />
        <Icon name={ICONS.twitter} />
      </section>
    </div>
  );
}
