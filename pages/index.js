import { Fragment } from "react";
import Layout from "../components/layout/layout";
import Aboutus from "../components/home/aboutus";
import Hero from "../components/home/hero";
import Services from "../components/home/services";
import Contactus from "../components/home/contact-us";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {
  return (
    <Layout>
      <Fragment>
        <Hero />
        <Services />
        <Aboutus />
        <Contactus />
      </Fragment>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["menu", "common"])),
  },
});

export default Home;
