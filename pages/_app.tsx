import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import '../styles/globals.scss'
import { store } from '../store'
import AppLayout from '../components/layout/appLayout/AppLayout'
import WebsiteLayout from '../components/layout/WebsiteLayout'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.asPath === '/app') {
    return (
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    )
  }

  return (
    <Provider store={store}>
      <WebsiteLayout>
        <Component {...pageProps} />
      </WebsiteLayout>
    </Provider>
  )
}

export default MyApp
