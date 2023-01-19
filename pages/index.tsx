import IndexMain from '../components/index/IndexMain/IndexMain'

import { Post } from 'interfaces/postType'
import { getAllPosts } from 'utils/post'

interface HomeProps {
  posts: Post[]
}

const Home = ({ posts }: HomeProps) => {
  return <IndexMain posts={posts} />
}

export default Home

export async function getStaticProps() {
  const allPostsData = await getAllPosts()
  return {
    props: {
      posts: allPostsData
    }
  }
}
