import '../css/global.css'
const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp
