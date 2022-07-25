import { Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { FiDownloadCloud } from 'react-icons/fi'
import { SiSpeedtest } from 'react-icons/si'
import { AiFillDatabase } from 'react-icons/ai'
import { GoBrowser } from 'react-icons/go'
import { FaTools } from 'react-icons/fa'
import { IconType } from 'react-icons'

const techSkills = [
  {
    title: 'Frontend',
    parag:
      'Typescript, Javascript(ES6), React, Nextjs, RESTful API, Tailwindcss, Chakra-UI, ReactQuery, Uploadcare, Html5, CSS3',
    Icon: GoBrowser,
  },
  {
    title: 'Quality Assurance',
    parag: 'Jest, ReactTesting',
    Icon: SiSpeedtest,
  },
  {
    title: 'Backend',
    parag: 'Nodejs, Redis, FaunaDB',
    Icon: AiFillDatabase,
    subtitle: ' (familiar)',
  },
  {
    title: 'Workflow Tools',
    parag:
      'VScode, Git, GitHub, Eslint, Prettier, Nx workspaces, Figma, Notion, Lucidchart, Sizzy browser',
    Icon: FaTools,
  },
]
const Tech = ({
  title,
  parag,
  Icon,
  subtitle,
}: {
  title: string
  parag: string
  Icon: IconType
  subtitle?: string
}) => {
  return (
    <div>
      <div className="row-start gap-x-2">
        <Icon />
        <Heading as="h3" size="md" className="uppercase">
          {title}
          <span className="ml-1 italic font-normal normal-case">
            {subtitle}
          </span>
        </Heading>
      </div>
      <p className="pl-7">{parag}</p>
    </div>
  )
}
//=======================
const Index: React.FC = () => (
  <section id="Home" className="layout">
    <Head>
      <title>About</title>
    </Head>
    <div className="lg:max-w-[750px] container-white">
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
        {techSkills.map((o) => (
          <Tech
            key={o.title}
            title={o.title}
            Icon={o.Icon}
            parag={o.parag}
            subtitle={o?.subtitle}
          />
        ))}
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
