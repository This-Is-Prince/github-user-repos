import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppWrapper from "../context/AppContext";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
