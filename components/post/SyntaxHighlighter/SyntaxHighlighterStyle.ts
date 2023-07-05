import styled from 'styled-components'

export const PComponent = styled.p`
  ${({ theme }) => theme.typography.text_lg}
  margin: ${({ theme }) => theme.toRem(20)} 0 0;
  padding: 0 ${({ theme }) => theme.spacing[20]};

  ${({ theme }) => `${theme.breakpoints.up('xs')} {
      font-size: ${theme.typography.text_xl.fontSize};
      line-height: ${theme.typography.text_xl.lineHeight};
      margin: ${theme.toRem(29)} 0 0;
  }`}
`

export const H2Component = styled.h2`
  ${({ theme }) => theme.typography.display_sm}
  padding:${({ theme }) => `${theme.toRem(50)} ${theme.spacing[20]} 0`};

  ${({ theme }) => `${theme.breakpoints.up('xs')} {
      font-size: ${theme.typography.display_md.fontSize};
      line-height: ${theme.typography.display_md.lineHeight};
      padding-top:${theme.spacing[60]};
  }`}
`

export const H1Component = styled.h1`
  ${({ theme }) => theme.typography.display_lg}
  padding:${({ theme }) => `${theme.toRem(50)} ${theme.spacing[20]} 0`};

  ${({ theme }) => `${theme.breakpoints.up('xs')} {
      padding-top:${theme.spacing[60]};
  }`}
`

export const PreComponent = styled.div`
  margin: ${({ theme }) => theme.spacing[20]} 0;
  ${({ theme }) => `${theme.breakpoints.up('xs')} {
  margin: ${theme.toRem(29)} 0;
  }`}
`

export const UlComponent = styled.ul`
  ${({ theme }) => theme.typography.text_lg}
  padding: ${({ theme }) => `0 ${theme.spacing[20]} 0 ${theme.spacing[60]}`};
  margin: ${({ theme }) => theme.spacing[20]} auto 0;
  ${({ theme }) => `${theme.breakpoints.up('xs')} {
    font-size: ${theme.typography.text_xl.fontSize};
    line-height: ${theme.typography.text_xl.lineHeight};
    margin-top: ${theme.toRem(29)};
  }`}
`

export const LiComponent = styled.li`
  padding: ${({ theme }) => theme.toRem(10)} 0;
`
