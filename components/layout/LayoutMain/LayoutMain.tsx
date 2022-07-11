
import { ReactNode } from 'react'

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
    </LayoutMainWrapper>
  )
}

export default LayoutMain
