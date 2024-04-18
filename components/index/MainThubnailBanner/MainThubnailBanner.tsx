import { format } from 'date-fns'

import {
  MainThubnailBannerWrapper,
  BottomGradation,
  LeftGradation,
  InfoWrapper,
  DateWrapper,
  MainTitle,
  Description,
  Thumbnail
} from './MainThubnailBannerStyle'
import testTh from '../../../public/test_thumbnail.png'

const MainThubnailBanner = ({ post }) => {
  console.log(post)
  return (
    <MainThubnailBannerWrapper>
      <Thumbnail
        src={`/post/${post.thumbnail}`}
        alt='thumbnail'
        objectFit='cover'
        layout='fill'
      />
      <BottomGradation />
      <LeftGradation />
      <InfoWrapper>
        <DateWrapper>{format(new Date(post.date), 'yyyy.MM.dd')}</DateWrapper>
        <MainTitle>{post.title}</MainTitle>
        <Description>{post.description}</Description>
      </InfoWrapper>
    </MainThubnailBannerWrapper>
  )
}

export default MainThubnailBanner
