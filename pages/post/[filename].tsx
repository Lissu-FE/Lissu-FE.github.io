import type { NextPage } from 'next'

import PostMain from 'components/post/PostMain/PostMain'
import { getAllPostPaths, getPostData } from 'utils/post'

const PostPage: NextPage = (props) => {
  return <PostMain data={props} />
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
