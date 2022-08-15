import { Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { FiDownloadCloud } from 'react-icons/fi'
import { SiSpeedtest } from 'react-icons/si'
import { AiFillDatabase } from 'react-icons/ai'
import { GoBrowser } from 'react-icons/go'
import { FaTools, FaReact } from 'react-icons/fa'
import { RiHeartsFill } from 'react-icons/ri'
import { IconType } from 'react-icons'

const techSkills = [
  {
    title: 'React Ecosystem',
    parag:
      'Typescript, React, Nextjs, Tailwindcss, Chakra-UI, Mantine, ReactQuery, React hook form, Swiper, Uploadcare',
    Icon: FaReact,
  },
  {
    title: 'Frontend',
    parag: 'Javascript(ES6) Html5, CSS3',
    Icon: GoBrowser,
  },
  {
    title: 'Backend',
    parag: 'Nodejs, Redis, FaunaDB, RESTful API',
    Icon: AiFillDatabase,
    subtitle: ' (familiar)',
  },
  {
    title: 'Quality Assurance',
    parag: 'Jest, React Testing Library',
    Icon: SiSpeedtest,
  },
  {
    title: 'Workflow Tools',
    parag:
      'VScode, Git, GitHub, Eslint, Prettier, Nx workspaces, Figma, Notion, Lucidchart, Sizzy browser',
    Icon: FaTools,
  },
  {
    title: 'Interested in',
    parag:
      'Headless CMS, Cypress, Storybook, xState, GraphQL, AWS, GitHub Actions, Astro, Remix, SolidJS',
    Icon: RiHeartsFill,
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
  <>
    <Head>
      <title>Home</title>
    </Head>
    <section id="Home" className="layout lg:pt-12">
      <div className="lg:max-w-[850px] container-white ">
        <Heading as="h1" size="lg" className="mb-2 text-3xl text-primary-500">
          UX-Driven Frontend Engineer
        </Heading>

        <Text className="pb-2 mb-6 border-b border-slate-400 text-slate-900">
          I help companies and individuals build web applications with clean UI,
          intuitive UX, and high performance. I currently live in Hamburg but
          can work remotely for you wherever you are. Feel free to reach out if
          you think I could fit into your team.
        </Text>
        <Heading as="h2" size="lg" className="mb-2 text-primary-500">
          My Stack
        </Heading>
        <div className="pb-2 mb-2 space-y-2 leading-8 border-b border-slate-400 text-slate-900">
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
  </>
)
export default Index
