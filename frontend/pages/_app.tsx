import "../styles.css"; export default function App({ Component, pageProps }) { return <Component {...pageProps} /> }import Head from "next/head";
import "../styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AiTradeX - New Experience in Trade AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
