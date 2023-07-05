import styled from 'styled-components'

export const ProgressBarWrapper = styled.div`
  ${({ theme }) => theme.typography.text_lg}
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  bottom: 0;
  padding: ${({ theme }) =>
    `${theme.toRem(10)} ${theme.spacing[20]} ${theme.toRem(5)}`};
  background-color: rgba(0, 0, 0, 0.85);
  width: 100vw;
  z-index: 1;
`

export const TimeCompleted = styled.div`
  float: left;
`

export const TimeRemaining = styled.div`
  float: right;
`

export const BarWrapper = styled.div`
  margin: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[16]}`};
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray_500};
  height: ${({ theme }) => theme.toRem(5)};
`

export const CompleteBar = styled.div<{ width: number }>`
  background-color: ${({ theme }) => theme.color.error_300};
  width: ${({ width }) => width}%;
  height: ${({ theme }) => theme.toRem(5)};
`
