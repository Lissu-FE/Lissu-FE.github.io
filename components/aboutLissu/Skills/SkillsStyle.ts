import Image from 'next/image'
import styled from 'styled-components'

export const SkillsWrapper = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;
`

export const MainTitle = styled.div`
  font-size: 48px;
  font-weight: 500;
`

export const SubTitle = styled.div`
  font-size: 32px;
  border-top: 4px double #ffffff;
  padding-top: 16px;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: row;
`

export const OneSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;
  text-align: center;
  font-weight: 500;
`

export const OneIcon = styled.div`
  background-color: #ffffff;
  border-radius: 140px;
  overflow: hidden;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SkillIcon = styled(Image)`
  padding: 20px;
  &:hover {
    filter: none;
    -webkit-filter: none;
  }
  @media (hover: hover) {
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }
`
