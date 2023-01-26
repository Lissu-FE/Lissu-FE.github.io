import styled from 'styled-components'

export const SyntaxHighlighterWrapper = styled.div`
  display: flex;
`

export const PComponent = styled.p`
  ${({ theme }) => theme.typography.text_xl}
  margin: ${({ theme }) => (theme.figure / 4) * 15}rem auto 0;
`
