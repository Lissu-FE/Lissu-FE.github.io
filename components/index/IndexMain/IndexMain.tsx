import MainCard from '../MainCard/MainCard'
import MainThubnailBanner from '../MainThubnailBanner/MainThubnailBanner'
import { IndexMainWrapper, PostListWrapper } from './IndexMainStyle'

const IndexMain = () => {
  return (
    <IndexMainWrapper>
      <MainThubnailBanner />
      <PostListWrapper>
        <MainCard />
        <MainCard />
        <MainCard />
      </PostListWrapper>
    </IndexMainWrapper>
  )
}

export default IndexMain
