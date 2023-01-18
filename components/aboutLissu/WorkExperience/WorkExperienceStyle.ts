import styled from 'styled-components'

export const WorkExperienceWrapper = styled.div`
  padding: ${({ theme }) => (theme.figure / 4) * 25}rem;
  gap: ${({ theme }) => theme.figure * 2}rem;
`

export const MainTitle = styled.div`
  ${({ theme }) => theme.typography.display_lg}
  font-weight: 500;
`

export const WorkBoxSection = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.figure * 2}rem;
  padding: ${({ theme }) => (theme.figure / 4) * 15}rem;
  text-align: center;
  gap: ${({ theme }) => theme.figure * 2}rem;
`

export const MyPosition = styled.div`
  ${({ theme }) => theme.typography.display_xs}
  font-weight: 500;
`
