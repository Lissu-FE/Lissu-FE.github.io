import { ReactNode } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { LayoutMainWrapper } from './LayoutMainStyle'

interface AppLayoutProps {
  children: ReactNode
}

const LayoutMain = ({ children }: AppLayoutProps) => {
  return (
    <LayoutMainWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutMainWrapper>
  )
}

export default LayoutMain
