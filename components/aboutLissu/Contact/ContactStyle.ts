import styled from 'styled-components'

export const ContactWrapper = styled.div`
  padding: ${({ theme }) => (theme.figure / 4) * 25}rem;
  gap: ${({ theme }) => theme.figure * 2}rem;
  background-color: rgba(255, 255, 255, 0.1);
`

export const MainTitle = styled.div`
  ${({ theme }) => theme.typography.display_lg}
  font-weight: 500;
`

export const Email = styled.div`
  ${({ theme }) => theme.typography.display_lg}
  text-align: center;
  font-weight: 500;
  margin-top: ${({ theme }) => theme.figure * 5}rem;
`

export const SubTitle = styled.div`
  text-align: center;
  opacity: 0.8;
  margin-top: ${({ theme }) => (theme.figure / 4) * 5}rem;
`
