import Head from 'next/head'
import { GiCagedBall } from 'react-icons/gi'

export const Home = (): JSX.Element => (
  <div className="grid h-screen place-items-center bg-blueGray-100 text-blueGray-600">
    <Head>
      <title> Next.js Boilerplate for production</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <main>
      <GiCagedBall
        size="50"
        className="m-auto mb-5 text-blue-400 duration-1000 animate-spin"
      />
      <h1 className="w-full mb-4 font-semibold text-center ">
        Next.js Boilerplate For Production
      </h1>
      <button
        className="w-full transform rounded shadow text-blueGray-50 bg-emerald-200 active:scale-90"
        onClick={() => {
          window.alert('working ...')
        }}
      >
        Test Button
      </button>
    </main>
  </div>
)

export default Home
