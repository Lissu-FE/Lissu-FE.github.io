import styled from 'styled-components'

export const Date = styled.time`
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
  display: flex;
  flex-direction: column;
  margin: 0 0.9375rem 1.875rem;
  transition: all 0.3s;
  gap: ${({ theme }) => (theme.figure / 4) * 5}rem;
  &:hover {
    transform: scale(1.1);

    ${Date}, ${CardDescription} {
      color: #ffffff;
    }
  }
`

export const ThumbnailWrapper = styled.div`
  ${({ theme }) => theme.pointer};
  aspect-ratio: 16 / 9;
  position: relative;
`

export const Category = styled.div`
  font-weight: bold;
  font-size: 1.125rem;
  text-transform: uppercase;
  height: 2.25rem;
  padding: 0 0.9375rem;
  display: flex;
  justify-content: center;
`

export const CardBody = styled.div`
  padding: 0.9375rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const MainTitle = styled.div`
  ${({ theme }) => theme.pointer};
  ${({ theme }) => theme.typography.display_xs}
  font-weight: 800;
`
