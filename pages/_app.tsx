import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import LayoutMain from '../components/layout/LayoutMain/LayoutMain'
import GlobalStyle from '../styles/GlobalStyle'
import { lightTheme, darkTheme } from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <LayoutMain>
          <Component {...pageProps} />
        </LayoutMain>
      </ThemeProvider>
    </>
  )
}

export default MyApp
