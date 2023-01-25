import MainContent from '../MainContent/MainContent'
import ProgressBar from '../ProgressBar/ProgressBar'
import { PostMainWrapper, SideRemote, ContentWrapper } from './PostMainStyle'

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
