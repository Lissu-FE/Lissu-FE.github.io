import type { NextPage } from 'next'

import { getAllPostPaths, getPostData } from 'utils/post'

const PostPage: NextPage = (props) => {
  console.log(props)
  return <>PostPage</>
}

export default PostPage

export async function getStaticPaths() {
  const allPostsPaths = getAllPostPaths()

  return {
    paths: allPostsPaths,
    fallback: false
  }
}

export async function getStaticProps({
  params
}: {
  params: { filename: string }
}) {
  const postDetail = await getPostData(params.filename)

  return {
    props: {
      ...postDetail
    }
  }
}
