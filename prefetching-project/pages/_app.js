import "../styles/globals.css";
import Head from "next/head";
import Layout from "../Components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Head>
            <title>Next JS Events</title>
            <meta name="description" content="Next Events Projects for Learning Next JS"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
