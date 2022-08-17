import Image from 'next/image'

import testTh from '../../../public/test_thumbnail.png'
import {
  MainThubnailBannerWrapper,
  BottomGradation,
  LeftGradation,
  InfoWrapper,
  DateWrapper,
  MainTitle,
  Description
} from './MainThubnailBannerStyle'

const MainThubnailBanner = () => {
  return (
    <MainThubnailBannerWrapper>
      <Image src={testTh} alt='testTh' objectFit='cover' layout='fill' />
      <BottomGradation />
      <LeftGradation />
      <InfoWrapper>
        <DateWrapper>2022.05.22</DateWrapper>
        <MainTitle>메인 제목 입니다.</MainTitle>
        <Description>설명설명</Description>
      </InfoWrapper>
    </MainThubnailBannerWrapper>
  )
}

export default MainThubnailBanner
