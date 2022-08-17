import styled from 'styled-components'

export const HeaderWrapper = styled.header<{ scrollY: number }>`
  z-index: 2;
  transition: background-color 0.4s;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  ${({ scrollY, theme }) => {
    if (scrollY !== 0) {
      return `background-color: ${theme.color.background_color};`
    }
  }}

  display: flex;
  position: fixed;
  width: 100%;

  padding: 0.9375rem 4%;
  align-items: center;
`

export const LogoWrapper = styled.h1`
  font-weight: bold;
  font-size: 2em;
`

export const Logo = styled.a`
  color: #fff;
`

export const MenuWrapper = styled.div`
  align-items: center;
  gap: 18px;
  margin-left: 18px;
  flex-direction: row;
`

export const Menu = styled.a`
  color: #e5e5e5;
`
