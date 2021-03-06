import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { dark, light } from '../styles/theme'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ light }>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
