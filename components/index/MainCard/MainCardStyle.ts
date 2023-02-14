import Image from 'next/image'
import styled from 'styled-components'

export const DateWrapper = styled.time`
  color: #737373;
  font-weight: 300;
  pointer-events: none;
`

export const CardDescription = styled.div`
  ${({ theme }) => theme.pointer};
  ${({ theme }) => theme.typography.text_md}
  color:#bfbfbf;
`

export const MainCardWrapper = styled.article`
  z-index: 1;
  margin: ${({ theme }) =>
    `0 ${theme.figure * 2}rem ${(theme.figure / 4) * 15}rem`};
  transition: all 0.3s;
  gap: ${({ theme }) => (theme.figure / 4) * 5}rem;
  &:hover {
    transform: scale(1.1);

    ${Date}, ${CardDescription} {
      color: ${({ theme }) => theme.color.white};
    }
  }
`

export const ThumbnailWrapper = styled.div`
  ${({ theme }) => theme.pointer};
  aspect-ratio: 16 / 9;
  position: relative;
`

export const Category = styled.div`
  ${({ theme }) => theme.typography.text_lg}
  font-weight: bold;
  text-transform: uppercase;
  height: 2.25rem;
  padding: 0 ${({ theme }) => theme.figure * 2}rem;
  justify-content: center;
`

export const CardBody = styled.div`
  padding: ${({ theme }) => theme.figure * 2}rem;
  gap: ${({ theme }) => (theme.figure / 2) * 5}rem;
`

export const MainTitle = styled.div`
  ${({ theme }) => theme.pointer};
  ${({ theme }) => theme.typography.display_xs}
  font-weight: 800;
`

export const CardThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
