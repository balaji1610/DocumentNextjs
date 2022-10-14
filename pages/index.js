import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Hello,I am BALAJI I am Software Engineer and a React Developer. You
          can Contact me on GITHUB
        </p>
        <p>
          Contact Me{" "}
          <span className="bg_github">
            {" "}
            <Link href="https://github.com/balaji1610?tab=repositories">
              GITHUB
            </Link>
          </span>
        </p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      <span className="bg_profilepage"><Link href="/posts/first-post">Click Profile Page</Link></span>
      
    </Layout>
  );
}
