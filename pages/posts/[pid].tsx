import { AppProps } from "next/dist/next-server/lib/router/router"

export async function getServerSideProps({ query }) {
  const { pid } = query
  return {
    // pidが自然数でないなら、404
    notFound: !pid.match(/^[0-9]+$/),
    props: { pid }
  }
}

const Post = (props: AppProps) => {
  const { pid } = props

  return <p>Post: {pid} </p>
}

export default Post
