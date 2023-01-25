import styled from 'styled-components'

export const PostMainWrapper = styled.div``

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
  flex-direction: row;
  margin: 87px auto 40px;
`

export const SideRemote = styled.aside`
  padding: 0 ${({ theme }) => (theme.figure / 4) * 5}rem;
  position: sticky;
  top: 62px;
  height: fit-content;
`
