import "../styles.css";
import "../styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tradgen - New Experience in Trade AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Component {...pageProps} />
      
      {/* Botão global de troca de tema */}
      <ThemeToggle />
    </>
  );
}
