import Image from 'next/image'
import Link from 'next/link'

import {
  MainCardWrapper,
  ThumbnailWrapper,
  Category,
  CardBody,
  Date,
  MainTitle,
  CardDescription
} from './MainCardStyle'

import testTh from 'public/test_thumbnail.png'

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
        <MainTitle> Why books should be your priority? </MainTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardDescription>
      </CardBody>
    </MainCardWrapper>
  )
}

export default MainCard
