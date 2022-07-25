import { Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { FiDownloadCloud } from 'react-icons/fi'
import { SiSpeedtest } from 'react-icons/si'
import { AiFillDatabase } from 'react-icons/ai'
import { GoBrowser } from 'react-icons/go'
import { FaTools } from 'react-icons/fa'

//=======================
const Index: React.FC = () => (
  <section id="Home" className="min-h-screen px-1 py-8 col-center md:px-3">
    <Head>
      <title>About</title>
    </Head>
    <div className="px-3 py-8 mx-auto sm:px-6 md:w-full lg:max-w-[750px] bg-white/20 rounded-2xl backdrop-blur-lg">
      <Heading as="h2" size="lg" className="mb-2 text-3xl text-primary-500">
        A UX-driven Frontend Developer
      </Heading>
      <Text className="pb-2 mb-6 border-b border-gray-500 text-slate-900">
        I build web applications with a lot of passion for clean UI, clean code,
        intuitive UX and great performance. I came from a business background
        and live in Germany since 2015. Feel free to reach out, if you think I
        could fit in your team.
      </Text>
      <Heading as="h2" size="lg" className="mb-2 text-primary-500">
        Stack & Technologies
      </Heading>
      <div className="pb-2 mb-2 space-y-2 leading-8 border-b border-gray-500 text-slate-900">
        <div>
          <span className="uppercase row-start gap-x-2">
            <GoBrowser />
            <Heading as="h3" size="md">
              Frontend
            </Heading>
          </span>
          <p>
            Typescript, Javascript(ES6), React, Nextjs, RESTful API,
            Tailwindcss, Chakra-UI, ReactQuery, Uploadcare, Html5, CSS3
          </p>
        </div>
        <div>
          <span className="uppercase row-start gap-x-2">
            <SiSpeedtest />
            <Heading as="h3" size="md">
              Quality Assurance
            </Heading>
          </span>
          <p>Jest, ReactTesting</p>
        </div>
        <div>
          <span className="uppercase row-start gap-x-2">
            <AiFillDatabase />
            <Heading as="h3" size="md">
              Backend
              <span className="ml-1 italic font-normal text-slate-8400">
                (Familiar)
              </span>
            </Heading>
          </span>
          <p>Nodejs, Redis, FaunaDB</p>
        </div>
        <div>
          <div className="row-start gap-x-2">
            <FaTools />
            <Heading as="h3" size="md" className="uppercase ">
              Workflow Tools
            </Heading>
          </div>
          <p>
            VScode, Git, GitHub, Eslint, Prettier, Nx workspaces, Figma, Notion,
            Lucidchart, Sizzy browser
          </p>
        </div>
      </div>
      <button
        type="button"
        className="w-full h-10 px-4 py-1 rounded-lg select-none  hover:bg-slate-800/70 bg-slate-800/50 active:translate-y-1 sm:max-w-[190px] sm:justify-start"
      >
        <Link href="/cv.pdf" passHref>
          <a className="flex items-center justify-center gap-x-3">
            <FiDownloadCloud />
            <span>Download CV</span>
          </a>
        </Link>
      </button>
    </div>
  </section>
)
export default Index
