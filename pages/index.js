/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="landing text-[#332854]">
      <Head>
        <title>Hotbeans - Creative Agency</title>
        <meta
          name="description"
          content="Hotbeans is a award winning creative agency."
        />
      </Head>
      <Layout />
    </div>
  );
}
