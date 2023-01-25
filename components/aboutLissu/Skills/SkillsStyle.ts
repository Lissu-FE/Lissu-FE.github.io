import styled from 'styled-components'

export const SkillsWrapper = styled.div`
  padding: ${({ theme }) => (theme.figure / 4) * 25}rem;
  gap: ${({ theme }) => theme.figure * 2}rem;
`

export const MainTitle = styled.div`
  ${({ theme }) => theme.typography.display_lg}
  font-weight: 500;
`

export const SubTitle = styled.div`
  ${({ theme }) => theme.typography.display_sm}
  border-top: 4px double ${({ theme }) => theme.color.white};
  padding-top: ${({ theme }) => theme.figure * 2}rem;
`

export const IconWrapper = styled.div`
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.figure * 2}rem;
  flex-direction: row;
`

export const OneSkill = styled.div`
  gap: ${({ theme }) => theme.figure * 2}rem;
  text-align: center;
  font-weight: 500;
`

export const OneIcon = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  overflow: hidden;
  width: ${({ theme }) => (theme.figure / 2) * 35}rem;
  height: ${({ theme }) => (theme.figure / 2) * 35}rem;
  align-items: center;
  justify-content: center;
  img {
    padding: ${({ theme }) => (theme.figure / 2) * 5}rem;
    &:hover {
      filter: none;
      -webkit-filter: none;
    }
    @media (hover: hover) {
      -webkit-filter: grayscale(1);
      filter: grayscale(1);
    }
  }
`
