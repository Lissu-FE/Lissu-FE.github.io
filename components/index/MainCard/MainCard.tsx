import { format } from 'date-fns'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  MainCardWrapper,
  ThumbnailWrapper,
  Category,
  CardBody,
  DateWrapper,
  MainTitle,
  CardDescription,
  CardThumbnail
} from './MainCardStyle'

const MainCard = ({ data }) => {
  const { push } = useRouter()
  const goPost = () => {
    push(`post/${data.id}`)
  }

  return (
    <MainCardWrapper>
      <Category>
        <Link href='/'>{data.category}</Link>
      </Category>
      <ThumbnailWrapper onClick={goPost}>
        <CardThumbnail
          src={`/post/${data.thumbnail}`}
          alt='testTh'
          layout='fill'
        />
      </ThumbnailWrapper>
      <CardBody>
        <DateWrapper>
          {format(new Date(data.date), 'LLLL dd, yyyy')}
        </DateWrapper>
        <MainTitle onClick={goPost}> {data.title} </MainTitle>
        <CardDescription onClick={goPost}>{data.description}</CardDescription>
      </CardBody>
    </MainCardWrapper>
  )
}

export default MainCard
