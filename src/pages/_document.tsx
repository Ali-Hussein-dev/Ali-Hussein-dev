import { Html, Head, Main, NextScript } from 'next/document'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
      </Head>
      <body className="scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
