import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <Layout path={pathname}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
