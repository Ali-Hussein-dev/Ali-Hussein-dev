import '../src/css/global.css'
import * as React from 'react'
// import NextNProgress from 'nextjs-progressbar'
import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Analytics } from '@vercel/analytics/react'
// import { GoogleAnalytics } from 'nextjs-google-analytics'

export const metadata: Metadata = {
  title: 'Ali Hussein',
  description: 'Welcome to my portfolio!',
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
    // yandex: '14d2e73487fa6c71',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <NextNProgress
      color="#fde68a"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    /> */}
      <body>
        <main className="relative min-h-screen flex-col-center lg:text-xl selection:bg-yellow-500/10 selection:text-zinc-100 z-10 text-gray-100 bg-zinc-950 overflow-hidden">
          <Header />
          <div className="grow">{children}</div>
          <Footer />
        </main>
      </body>
      <Analytics />
      {/* <GoogleAnalytics trackPageViews strategy="lazyOnload" /> */}
    </html>
  )
}
