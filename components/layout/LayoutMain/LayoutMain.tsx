import { ReactNode } from 'react'

import { LayoutMainWrapper, MainWrapper } from './LayoutMainStyle'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface AppLayoutProps {
  children: ReactNode
}

const LayoutMain = ({ children }: AppLayoutProps) => {
  return (
    <LayoutMainWrapper>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </LayoutMainWrapper>
  )
}

export default LayoutMain
