import styled from 'styled-components'

export const MainContentWrapper = styled.div`
  position: relative;
`

export const HeaderDateWrapper = styled.div`
  ${({ theme }) => theme.typography.text_sm}
  gap: ${({ theme }) => (theme.figure / 4) * 15}rem;
  color: #a6a6a6;
  flex-direction: row;
  height: ${({ theme }) => (theme.figure / 2) * 9}rem;
  align-items: center;
  span {
    ${({ theme }) => theme.typography.text_sm}
  }
  ${({ theme }) => `${theme.breakpoints.up('xs')} {
    ${theme.typography.text_md}
    span {
      ${theme.typography.text_md}
    }
  }`}
`

export const HeaderWrapper = styled.div`
  padding: 0 ${({ theme }) => (theme.figure / 2) * 5}rem;
  gap: ${({ theme }) => (theme.figure / 4) * 5}rem;
`

export const DateLine = styled.div`
  gap: 0 ${({ theme }) => theme.figure / 2}rem;
  flex-direction: row;
`

export const PostTitle = styled.h1`
  ${({ theme }) => theme.typography.display_lg}
`

export const PostDescription = styled.div`
  ${({ theme }) => theme.typography.text_xl}
  color: #a6a6a6;
`

export const ThumbnailWrapper = styled.div`
  img {
    position: static;
  }
`
