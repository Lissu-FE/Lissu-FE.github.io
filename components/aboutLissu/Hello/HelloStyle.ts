import Image from 'next/image'
import styled from 'styled-components'

export const HelloWrapper = styled.div`
  padding: 50px 50px 50px;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgba($color: #ffffff, $alpha: 0.1);
`

export const MimojiWrapper = styled.div`
  border-radius: 300px;
  width: fit-content;
  padding: 20px;
  background-color: white;
  overflow: hidden;
  margin-bottom: 30px;
`

export const MyRole = styled.div`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 2px solid red;
  margin-bottom: 30px;
`

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: row;
`

export const GitIcon = styled(Image)`
  cursor: pointer;
  padding: 2px;
  background-color: white;
  border-radius: 48px;
  &:hover {
    opacity: 0.7;
  }
`

export const InstagramIcon = styled(Image)`
  cursor: pointer;
  padding: 2px;
  &:hover {
    opacity: 0.7;
  }
`
