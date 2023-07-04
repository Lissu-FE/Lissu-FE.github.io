import styled from 'styled-components'

export const PostMainWrapper = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing[20]};
`

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
  flex-direction: row;
  margin: 87px auto 40px;
`

export const SideRemote = styled.div`
  display: none;
  padding: 0 ${({ theme }) => (theme.figure / 4) * 5}rem;
  position: sticky;
  top: 62px;
  height: fit-content;

  ${({ theme }) => `${theme.breakpoints.up('xs')} {
    display: flex;
  }`}
`
