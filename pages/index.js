import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
export default function Home({ allPostsData }) {
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
      <span className="bg_profilepage">
        <Link href="/posts/first-post">Click Profile Page</Link>
      </span>

      <section>
        <div>
          {" "}
          <ul>
            {allPostsData.map(({ id, title, date }) => (
              <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
