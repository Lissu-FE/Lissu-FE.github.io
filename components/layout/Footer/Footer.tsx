import { FooterWrapper, LissuFinishLogo } from './FooterStyle'

const Footer = () => {
  return (
    <FooterWrapper>
      <div>Make By Lissu❤️</div>
      <LissuFinishLogo
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        &lt; Lissu /&gt;
      </LissuFinishLogo>
    </FooterWrapper>
  )
}

export default Footer
