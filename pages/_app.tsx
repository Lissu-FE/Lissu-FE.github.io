import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle'
import { lightTheme, darkTheme } from '../styles/theme'
import LayoutMain from '../components/layout/LayoutMain/LayoutMain'

function MyApp({ Component, pageProps }: AppProps) {
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
