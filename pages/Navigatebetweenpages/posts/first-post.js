import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => console.log("Script Executed")}
        />
        <h1>First Post</h1>
        <Link href="/">Back To Home</Link>
        <Image
          src="/images/avatar.jpg"
          alt="profile"
          height={144}
          width={144}
        />
      </Layout>
    </>
  );
}
