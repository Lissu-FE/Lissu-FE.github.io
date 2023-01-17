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
        <Logo href='/'>Lissu-log</Logo>
      </LogoWrapper>
      <MenuWrapper>
        <Menu href='/'>home</Menu>
        <Menu href='/about-lissu'>about</Menu>
      </MenuWrapper>
    </HeaderWrapper>
  )
}

export default Header
