import { Header } from '@/components/Header'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from '@/components/Footer'
import '../css/global.css'
import 'video-react/dist/video-react.css'

const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}): JSX.Element => (
  <ChakraProvider>
    <main className="font-mono text-gray-100 lg:text-xl">
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ali Hussein</title>
      </Head>
      <Header />
      <div className="">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  </ChakraProvider>
)

export default MyApp
