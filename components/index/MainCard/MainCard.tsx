import Link from 'next/link'

import {
  MainCardWrapper,
  ThumbnailWrapper,
  Category,
  CardBody,
  Date,
  MainTitle,
  CardDescription,
  CardThumbnail
} from './MainCardStyle'

const MainCard = ({ data }) => {
  return (
    <MainCardWrapper>
      <Category>
        <Link href='/'>css</Link>
      </Category>
      <ThumbnailWrapper>
        <CardThumbnail
          src={`/post/${data.thumbnail}`}
          alt='testTh'
          layout='fill'
        />
      </ThumbnailWrapper>
      <CardBody>
        <Date> October 9, 2018 </Date>
        <MainTitle> {data.title} </MainTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardBody>
    </MainCardWrapper>
  )
}

export default MainCard
