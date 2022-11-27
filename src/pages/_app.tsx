/* eslint-disable @next/next/no-img-element */
import { Header } from '@/components/Header'
import Head from 'next/head'
import Footer from '@/components/Footer'
import '../css/global.css'
import NextNProgress from 'nextjs-progressbar'
import Image from 'next/image'
import BGImage from '../../public/bg-3.jpg'
import { Nunito } from '@next/font/google'
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
    <main className="relative min-h-screen text-gray-100 col-center lg:text-xl selection:bg-yellow-900/90 selection:text-slate-100">
      <Header />
      <Image
        src={BGImage}
        className="w-full h-screen object-cover fixed top-0 left-0 z-[-1]"
        alt="background"
        loading="eager"
      />
      <div className="grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  </div>
)

export default MyApp
