import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname, locale } = useRouter();

  return (
    <Layout locale={locale} path={pathname}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
