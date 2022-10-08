import Head from 'next/head'
import Link from 'next/link'
import { FiDownloadCloud } from 'react-icons/fi'
import { SiSpeedtest } from 'react-icons/si'
import { AiFillDatabase } from 'react-icons/ai'
import { GoBrowser } from 'react-icons/go'
import { FaTools, FaReact } from 'react-icons/fa'
import { RiHeartsFill } from 'react-icons/ri'
import { IconType } from 'react-icons'
import Image from 'next/image'

const techSkills = [
  {
    title: 'React Ecosystem',
    parag:
      'Typescript, React, Nextjs, Tailwindcss, Chakra-UI, Swiper, ReactQuery, Recharts, React hook form, ...etc.',
    Icon: FaReact,
  },
  {
    title: 'Workflow Tools',
    parag:
      'Git, GitHub, Eslint, Prettier, Nx workspaces, Figma, Notion, Lucidchart, Sizzy browser',
    Icon: FaTools,
  },
  {
    title: 'Frontend',
    parag: 'Javascript(ES6) Html5, CSS3, Browser API',
    Icon: GoBrowser,
  },
  {
    title: 'Quality Assurance',
    parag: 'Jest, React Testing Library',
    Icon: SiSpeedtest,
  },
  {
    title: 'Backend',
    parag: 'Nodejs, Redis, FaunaDB',
    Icon: AiFillDatabase,
    subtitle: ' (familiar)',
  },

  {
    title: 'Interested in',
    parag:
      'Headless CMS, Cypress, Storybook, xState, AWS, GitHub Actions, Astro, SolidJS',
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
    <div className="pb-2">
      <div className="row-start gap-x-2">
        <Icon className="text-slate-700" />
        <h3 className="font-semibold tracking-tighter uppercase md:text-2xl">
          {title}
          <span className="ml-1 text-base italic font-normal normal-case">
            {subtitle}
          </span>
        </h3>
      </div>
      <p className="leading-5 tracking-tighter md:text-xl pl-7 text-slate-700">
        {parag}
      </p>
    </div>
  )
}
//=======================
const Index: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <section id="Home" className="max-w-[1200px] mx-auto px-2 py-8 lg:pt-12">
      <div className="w-full container-white blur-light">
        <div className="mb-6 lg:row-between">
          <div className="relative w-full md:h-80 aspect-video lg:order-2">
            <Image src="/website-maintenance.svg" layout="fill" alt="image" />
          </div>
          <div>
            <h1 className="lg:mb-2 h1 text-primary-400 lg:text-5xl">
              UX-Driven <br className="hidden lg:block" /> Frontend Engineer
            </h1>
            <p className="leading-6 text-slate-700 ">
              I help companies and individuals build web applications with clean
              UI, intuitive UX, and high performance. I can work for you on-site
              if you are in Hamburg or remotely if you are in EU time zones.
              Feel free to reach out if you think I could fit into your team.
            </p>
          </div>
        </div>
        <h2 className="mb-3 text-2xl text-center lg:text-3xl h1 text-primary-400">
          Toolbox
        </h2>
        <div className="pb-2 mb-3 leading-8 border-b border-slate-300 text-slate-900 lg:grid lg:grid-cols-2 lg:gap-x-3">
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
          className="w-full h-10 px-4 py-1 rounded-lg  select-none  hover:bg-slate-900/70 bg-slate-900/50 active:translate-y-1 sm:max-w-[190px] sm:justify-start"
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
