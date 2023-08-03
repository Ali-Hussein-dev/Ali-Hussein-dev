import '../src/css/global.css'
import * as React from 'react'
import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Analytics } from '@vercel/analytics/react'
import NextTopLoader from 'nextjs-toploader'
import { GoogleAnalytics } from '@/components/client-components'

export const metadata: Metadata = {
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <NextTopLoader color="#fde68a" showSpinner={false} speed={300} />
      <body>
        <GoogleAnalytics trackPageViews strategy="lazyOnload" />
        <main className="relative min-h-screen flex-col-center lg:text-xl selection:bg-yellow-500/10 selection:text-zinc-100 z-10 text-gray-100 bg-zinc-950 overflow-hidden">
          <Header />
          <div className="grow">{children}</div>
          <Footer />
        </main>
      </body>
      <Analytics />
    </html>
  )
}
