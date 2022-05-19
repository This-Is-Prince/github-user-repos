import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import AppWrapper from "../context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
