/* eslint-disable @next/next/no-img-element */
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
    <main className="relative font-mono text-gray-100 lg:text-xl">
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ali Hussein</title>
      </Head>
      <Header />

      {/* <Image
          // src="/body-bg.jpg"
          src="/bg-3.jpg"
          // layout="fixed"
          width="100%"
          height="100vh"
          className="w-full h-screen object-cover fixed top-0 left-0 z-[-1]"
          alt="background"
        /> */}
      <img
        // src="/body-bg.jpg"
        src="/bg-3.jpg"
        className="w-full h-screen object-cover fixed top-0 left-0 z-[-1]"
        alt="background"
      />
      <Component {...pageProps} />

      <Footer />
    </main>
  </ChakraProvider>
)

export default MyApp
