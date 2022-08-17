import Image from 'next/image'
import Link from 'next/link'

import testTh from '../../../public/test_thumbnail.png'
import {
  MainCardWrapper,
  ThumbnailWrapper,
  Category,
  CardBody,
  Date
} from './MainCardStyle'

const MainCard = () => {
  return (
    <MainCardWrapper>
      <Category>
        <Link href='/'>css</Link>
      </Category>
      <ThumbnailWrapper>
        <Image src={testTh} alt='testTh' objectFit='cover' layout='fill' />
      </ThumbnailWrapper>
      <CardBody>
        <Date> October 9, 2018 </Date>
      </CardBody>
    </MainCardWrapper>
  )
}

export default MainCard
