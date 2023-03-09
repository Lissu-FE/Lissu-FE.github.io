import Image from 'next/image'
import styled from 'styled-components'

export const MainThubnailBannerWrapper = styled.div`
  aspect-ratio: 16 / 9;
  position: relative;
`

export const BottomGradation = styled.div`
  position: absolute;
  bottom: 0;
  top: 60%;
  left: 0;
  right: 0;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 9%, 0),
    #161616 83.95%,
    #161616
  );
`

export const LeftGradation = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 26%;
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
`

export const InfoWrapper = styled.div`
  position: absolute;
  left: 4%;
  width: 36%;
  word-wrap: break-word;
  word-break: keep-all;
  justify-content: center;
  height: 100%;
`

export const DateWrapper = styled.div`
  font-size: 1vw;
  opacity: 0.75;
`

export const MainTitle = styled.div`
  ${({ theme }) => theme.typography.display_md}
  line-height:${({ theme }) => theme.figure * 3};

  ${({ theme }) => `${theme.breakpoints.up('xs')} {
      font-size: ${theme.figure * 5}rem;
  }`}

  font-size: 3.125vw;
  margin: ${({ theme }) => (theme.figure / 4) * 5}rem 0;
  font-weight: bold;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.display_xs}

  ${({ theme }) => `${theme.breakpoints.up('xs')} {
    font-size: ${(theme.figure / 4) * 13}rem;
}`}
`

export const Thumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
