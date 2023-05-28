/* eslint-disable @next/next/no-img-element */
import { Header } from '@/components/Header'
import Head from 'next/head'
import Footer from '@/components/Footer'
import '../css/global.css'
import NextNProgress from 'nextjs-progressbar'
import { Nunito } from 'next/font/google'
import { GoogleAnalytics } from 'nextjs-google-analytics'
const font = Nunito({ subsets: ['latin', 'latin-ext'] })

const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}): JSX.Element => (
  <div className={font.className}>
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
    <main className="relative min-h-screen flex-col-center lg:text-xl selection:bg-yellow-500/10 selection:text-zinc-100 z-10 text-gray-100 bg-black overflow-hidden">
      <Header />
      <div className="grow">
        <GoogleAnalytics trackPageViews strategy="lazyOnload" />
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  </div>
)

export default MyApp
