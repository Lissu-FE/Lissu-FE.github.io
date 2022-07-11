import { ReactNode } from 'react'

import { LayoutMainWrapper } from './LayoutMainStyle'
import Header from '../Header/Header'

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
