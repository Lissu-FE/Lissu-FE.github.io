import { ReactNode } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { LayoutMainWrapper, MainWrapper } from './LayoutMainStyle'

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
