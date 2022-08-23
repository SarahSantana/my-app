import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>José da Silva</p>
          <p>
            Oi me chamo José da Silva{' '}
            <Link href="/posts/first-post">page</Link>.)
          </p>
        </section>
      </>
    </Layout>
  );
}