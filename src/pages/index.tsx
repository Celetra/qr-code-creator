import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import QRCode from "qrcode";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const [src, setSrc] = useState("");

  const generate = () => {
    QRCode.toDataURL(`https://github.com/${username}`).then(setSrc);
  };

  return (
    <>
      <Head>
        <title>QR code creator</title>
        <meta name="description" content="QR code creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src={src} />

      <input
        className="bg-black text-white"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="button" onClick={generate}>
        Generate
      </button>
    </>
  );
};

export default Home;
