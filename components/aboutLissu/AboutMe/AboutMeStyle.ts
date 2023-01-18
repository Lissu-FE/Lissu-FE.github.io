import styled from 'styled-components'

export const AboutMeWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  ${({ theme }) => theme.typography.text_lg}
  padding: ${({ theme }) => (theme.figure / 4) * 25}rem;
  gap: ${({ theme }) => theme.figure * 2}rem;
`

export const MainTitle = styled.div`
  ${({ theme }) => theme.typography.display_lg}
  font-weight: 500;
`
