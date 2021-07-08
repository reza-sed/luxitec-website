import React from "react";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Network() {
  return (
    <Layout>
      <div className="page page--normal">
        <section className="page__content">
          <h2>Networking Services</h2>
          <p>
            multinational technology conglomerate developing, manufacturing, and
            selling networking hardware, telecommunications equipment, and other
            high-technology services and products.multinational technology
            conglomerate developing, manufacturing, and selling networking
            hardware, telecommunications equipment, and other high-technology
            services and products.
          </p>
        </section>
        <div className="page__image-wrapper">
          <Image
            className={"page__image"}
            src={"/images/sites/network.png"}
            height={508}
            width={394}
            alt="networking"
          />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["menu"])),
  },
});
