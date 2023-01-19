import MainCard from '../MainCard/MainCard'
import MainThubnailBanner from '../MainThubnailBanner/MainThubnailBanner'
import { IndexMainWrapper, PostListWrapper } from './IndexMainStyle'

import { Post } from 'interfaces/postType'

const IndexMain = ({ posts }) => {
  return (
    <IndexMainWrapper>
      <MainThubnailBanner />
      <PostListWrapper>
        {posts.map((post: Post) => {
          return <MainCard key={post.id} data={post} />
        })}
      </PostListWrapper>
    </IndexMainWrapper>
  )
}

export default IndexMain
