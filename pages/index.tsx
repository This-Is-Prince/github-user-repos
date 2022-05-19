import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useAppContext } from "../context/AppContext";

const Home: NextPage = () => {
  const {
    state: { isLoading },
  } = useAppContext()!;
  return (
    <>
      <Head>
        <title>Github User Repos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex justify-center items-center bg-[#0d1117]">
        {isLoading && <Loading />}
      </main>
    </>
  );
};

export default Home;
