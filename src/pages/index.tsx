import { Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { IoDocumentText } from 'react-icons/io5'

const DownloadCV = () => {
  const onClick = async () => {
    await fetch('/api/cv', {
      method: 'GET',
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Sorry, I could not find that file.')
        }
        return res.blob()
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.setAttribute('download', 'Ali_Hussein_cv.pdf')
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      })
  }
  return (
    <button
      onClick={onClick}
      type="submit"
      className="flex items-center justify-center w-full h-10 px-4 py-1 rounded-lg select-none gap-x-3 hover:bg-slate-800/40 bg-slate-800/20 active:translate-y-1 sm:max-w-[190px] sm:justify-start"
    >
      <IoDocumentText />
      <span>Download CV</span>
    </button>
  )
}
//=======================
const Index: React.FC = () => (
  <section id="Home" className="min-h-screen px-1 py-8 col-center md:px-3">
    <Head>
      <title>About</title>
    </Head>
    <div className="px-3 py-8 mx-auto sm:px-6 md:w-full lg:w-7/12 bg-white/20 rounded-2xl backdrop-blur-lg">
      <Heading as="h2" size="lg" className="mb-2 text-3xl text-primary-500">
        A UX-driven Frontend Developer
      </Heading>
      <Text className="pb-2 mb-6 border-b border-gray-500">
        I build web applications with a lot of passion for clean UI, clean code,
        intuitive UX and great performance. I came from a business background
        and live in Germany since 2015. Feel free to reach out, if you think I
        could fit in your team.
      </Text>
      <Heading as="h2" size="lg" className="mb-2 text-primary-500">
        Stack & Technologies
      </Heading>
      <div className="pb-2 mb-2 space-y-2 leading-8 border-b border-gray-500">
        <div>
          <Heading as="h3" size="md" className="text-gray-300 ">
            <span className="underline">Frontend Techs:</span>
            <span className="ml-1 italic text-slate-800">(Proficient)</span>
          </Heading>
          <p>
            Typescript, Javascript(ES6), React, Nextjs, RESTful API,
            Tailwindcss, Html5, CSS3, Jest, Chakra-UI, ReactQuery, Uploadcare
          </p>
        </div>
        <div>
          <Heading as="h3" size="md" className="text-gray-300">
            <span className="underline">Backend Techs:</span>
            <span className="ml-1 italic text-slate-800">(Familiar)</span>
          </Heading>
          <p>Nodejs, Redis, FaunaDB</p>
        </div>
        <div>
          <Heading as="h3" size="md" className="text-gray-300 underline">
            Workflow Tools
          </Heading>
          <p>
            VScode, Git, GitHub, Eslint, Prettier, Nx workspaces, Figma, Notion,
            Lucidchart
          </p>
        </div>
      </div>
      <DownloadCV />
    </div>
  </section>
)
export default Index
