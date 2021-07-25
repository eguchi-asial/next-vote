import Head from 'next/head'
import Link from 'next/link'

export default function Posts() {
  const posts = [1, 2, 3].map(n => <li key={n}><Link href={`/posts/${n}`}><a>{n}</a></Link></li>)
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
      <div>
        <ul>
          {posts}
        </ul>
      </div>
    </>
  )
}
