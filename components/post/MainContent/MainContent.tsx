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
import SyntaxHighlighter from '../SyntaxHighlighter/SyntaxHighlighter'

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
        <Image src={`/post/${thumbnail}`} alt={thumbnail} layout='fill' />
      </ThumbnailWrapper>
      <ReactMarkdown components={SyntaxHighlighter as any}>
        {contentHtml}
      </ReactMarkdown>
    </MainContentWrapper>
  )
}

export default MainContent
