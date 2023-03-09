import { PostMainWrapper, SideRemote, ContentWrapper } from './PostMainStyle'
import MainContent from '../MainContent/MainContent'
import ProgressBar from '../ProgressBar/ProgressBar'

const PostMain = ({ data }) => {
  console.log(data)
  return (
    <PostMainWrapper>
      <ContentWrapper>
        <MainContent data={data} />
        <SideRemote>SideRemote</SideRemote>
      </ContentWrapper>
      <ProgressBar />
    </PostMainWrapper>
  )
}

export default PostMain
