import '@mantine/core/styles.css'
import '../src/css/global.css'
import * as React from 'react'
import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
// import { Analytics } from '@vercel/analytics/react'
import NextTopLoader from 'nextjs-toploader'
import { GoogleAnalytics } from '@/components/client-components'
import { Sora, Indie_Flower } from 'next/font/google'
import { MantineProvider } from '@mantine/core'

const baseUrl = 'https://ali-hussein.com'

const Sora_font = Sora({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
})
const Indie_Flower_font = Indie_Flower({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-indie-flower',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Ali Hussein',
  description: 'Frontend Developer, Nextjs, Reactjs, Tailwindcss, Typescript',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
  openGraph: {
    title: 'Ali Hussein',
    description: 'Frontend Developer, Nextjs, Reactjs, Tailwindcss, Typescript',
    url: baseUrl,
    siteName: 'Ali Hussein',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'Ali Hussein',
    card: 'summary_large_image',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          defer
          src="https://eu.umami.is/script.js"
          data-website-id="2c1c1ce8-92ec-4683-8b2d-024a4fff94b1"
          // data-host-url="https://ali-hussein.com"
        ></script>
      </head>
      <NextTopLoader color="#fde68a" showSpinner={false} speed={300} />
      <body className={`${Sora_font.variable} ${Indie_Flower_font.variable}`}>
        <GoogleAnalytics trackPageViews strategy="lazyOnload" />
        <main className="relative min-h-screen flex-col-center lg:text-xl selection:bg-theme-primary/70 selection:text-zinc-800 z-10 text-zinc-100 bg-zinc-950 overflow-hidden">
          <MantineProvider>
            <Header />
            <div className="grow w-full">{children}</div>
            <Footer />
          </MantineProvider>
        </main>
      </body>
      {/* <Analytics /> */}
    </html>
  )
}
