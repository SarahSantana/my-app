import Layout from '../../components/layout'

export default function Post({ postData }: {
  postData: {
    title: string
    id: string
    date: string
  }
}) {
  return (
    <Layout home={false}>
      <>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </>
    </Layout>
  );
}

export async function getStaticPaths() {
  // podia ser uma chamada para uma api por ex
  const paths = [
    { params: { id: 'ssg-ssr' } },
    { params: { id: 'pre-rendering' } }
  ]
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  // podia ser uma chamada para uma api por ex
  const postData = (params.id === 'ssg-ssr') ? {
    title: 'SSG SSR',
    id: 'ssg-ssr',
    date: '23-08-2022'
  } : {
    title: 'Pré rendering',
    id: 'pre-rendering',
    date: '23-08-2022'
  }

  return {
    props: {
      postData,
    }
  }
}