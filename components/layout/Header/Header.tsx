import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  MenuWrapper,
  Menu
} from './HeaderStyle'

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo href='/'>Lissu-log</Logo>
      </LogoWrapper>
      <MenuWrapper>
        <Menu href='/'>home</Menu>
        <Menu href='/'>about</Menu>
      </MenuWrapper>
    </HeaderWrapper>
  )
}

export default Header
