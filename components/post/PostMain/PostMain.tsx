import { PostMainWrapper, SideRemote, ContentWrapper } from './PostMainStyle'
import MainContent from '../MainContent/MainContent'
import ProgressBar from '../ProgressBar/ProgressBar'

const PostMain = ({ data }) => {
  return (
    <PostMainWrapper>
      <ContentWrapper>
        <MainContent data={data} />
        <SideRemote>SideRemote</SideRemote>
      </ContentWrapper>
      <ProgressBar totalTime={data.readTime * 60} />
    </PostMainWrapper>
  )
}

export default PostMain
