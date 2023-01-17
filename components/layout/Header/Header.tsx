import { useState, useEffect } from 'react'

import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  MenuWrapper,
  Menu
} from './HeaderStyle'

const Header = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderWrapper scrollY={scrollY}>
      <LogoWrapper>
        <Logo href='/'>&lt; Lissu &gt;</Logo>
      </LogoWrapper>
      <MenuWrapper>
        <Menu href='/'>home</Menu>
        <Menu href='/about-lissu'>about</Menu>
      </MenuWrapper>
    </HeaderWrapper>
  )
}

export default Header
