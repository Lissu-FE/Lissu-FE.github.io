import { format } from 'date-fns'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import {
  MainContentWrapper,
  HeaderDateWrapper,
  HeaderWrapper,
  DateLine,
  PostTitle,
  PostDescription,
  ThumbnailWrapper
} from './MainContentStyle'

const MainContent = ({
  data: { contentHtml, date, readTime, title, description, thumbnail }
}) => {
  return (
    <MainContentWrapper>
      <HeaderWrapper>
        <HeaderDateWrapper>
          <DateLine>
            <span className='material-icons'>edit_calendar</span>
            {format(new Date(date), 'LLLL M, yyyy')}
          </DateLine>
          <DateLine>
            <span className='material-icons'>schedule</span>
            {readTime} min to read
          </DateLine>
        </HeaderDateWrapper>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </HeaderWrapper>
      <ThumbnailWrapper>
        <Image
          src={`/post/${thumbnail}`}
          alt={thumbnail}
          width={940}
          height={940}
          style={{
            position: 'static',
            width: '100%',
            height: '100%',
            margin: '30px 0'
          }}
        />
      </ThumbnailWrapper>
      <ReactMarkdown>{contentHtml}</ReactMarkdown>
    </MainContentWrapper>
  )
}

export default MainContent
