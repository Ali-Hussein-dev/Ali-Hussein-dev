import { Header } from '@/components/Header'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import '../css/global.css'
const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}): JSX.Element => {
  return (
    <ChakraProvider>
      <main className="text-blueGray-600">
        <Head>
          <link rel="icon" href="/favicon-32x32.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Ali Hussein</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}

export default MyApp
