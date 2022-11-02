/* eslint-disable @next/next/no-img-element */
import { Header } from '@/components/Header'
import Head from 'next/head'
import Footer from '@/components/Footer'
import '../css/global.css'
import 'video-react/dist/video-react.css'
import NextNProgress from 'nextjs-progressbar'
import splitbee from '@splitbee/web'
import * as React from 'react'

const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}): JSX.Element => {
  React.useEffect((): void => {
    splitbee.init()
  }, [])
  return (
    <>
      <NextNProgress
        color="#fde68a"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ali Hussein</title>
      </Head>
      <main className="relative min-h-screen text-gray-100 col-center lg:text-xl selection:bg-orange-900/90 selection:text-slate-300">
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
        <div className="grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default MyApp
