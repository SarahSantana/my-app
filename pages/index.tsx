import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const allPost = [
  {
    title: 'SSG SSR',
    id: 'ssg-ssr',
  },
  {
    title: 'Pré rendering',
    id: 'pre-rendering',
  }
]

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
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPost.map(({ id, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>
        </section>
      </>
    </Layout>
  );
}