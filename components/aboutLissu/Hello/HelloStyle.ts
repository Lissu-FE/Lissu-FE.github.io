import Image from 'next/image'
import styled from 'styled-components'

export const HelloWrapper = styled.div`
  ${({ theme }) => theme.typography.display_lg}
  padding: ${({ theme }) => (theme.figure / 4) * 25}rem;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => (theme.figure / 2) * 5}rem;
  background-color: rgba(255, 255, 255, 0.1);
`

export const MimojiWrapper = styled.div`
  border-radius: 50%;
  width: fit-content;
  padding: ${({ theme }) => (theme.figure / 2) * 5}rem;
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
  margin-bottom: ${({ theme }) => (theme.figure / 4) * 15}rem;
`

export const MyRole = styled.div`
  ${({ theme }) => theme.typography.display_xs}
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 2px solid ${({ theme }) => theme.color.error_300};
  margin-bottom: ${({ theme }) => (theme.figure / 4) * 15}rem;
`

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.figure * 2}rem;
  flex-direction: row;
`

export const GitIcon = styled(Image)`
  ${({ theme }) => theme.pointer}
  padding: ${({ theme }) => theme.figure / 4}rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
  }
`

export const InstagramIcon = styled(Image)`
  ${({ theme }) => theme.pointer}
  padding: ${({ theme }) => theme.figure / 4}rem;
  &:hover {
    opacity: 0.7;
  }
`
