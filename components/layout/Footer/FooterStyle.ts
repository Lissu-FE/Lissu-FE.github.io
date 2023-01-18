import styled from 'styled-components'

export const FooterWrapper = styled.div`
  text-align: center;
  padding: ${({ theme }) => (theme.figure / 4) * 15}rem;
  position: relative;
  height: ${({ theme }) => (theme.figure / 2) * 15}rem;
`

export const LissuFinishLogo = styled.div`
  ${({ theme }) => theme.pointer}
  ${({ theme }) => theme.typography.display_md}
  position: absolute;
  bottom: ${({ theme }) => (theme.figure / 4) * 15}rem;
  right: ${({ theme }) => (theme.figure / 4) * 15}rem;
  font-weight: 900;
  &:hover {
    color: ${({ theme }) => theme.color.error_200};
  }
`
