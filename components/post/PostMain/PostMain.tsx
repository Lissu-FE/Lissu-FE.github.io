import { PostMainWrapper, SideRemote, ContentWrapper } from './PostMainStyle'
import { useUpXs } from '../../../utils/useMatch'
import MainContent from '../MainContent/MainContent'
import ProgressBar from '../ProgressBar/ProgressBar'

const PostMain = ({ data }) => {
  const showSideVar = useUpXs()

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
