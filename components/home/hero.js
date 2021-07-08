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
      <section>
        <h1>LUXITEC</h1>
        <p>{t("Hero paragraph")}</p>
        <PrimaryButton title={t("Read more")} />
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
