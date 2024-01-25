import "../styles/globals.css";
import Head from "next/head";
import Layout from "../Components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Head>
            <title>Next JS Events</title>
            <meta name="description" content="Next Events Projects for Learning Next JS"/>
        </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
