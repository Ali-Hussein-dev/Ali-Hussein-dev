import Head from 'next/head'
import Link from 'next/link'
import { FiDownloadCloud } from 'react-icons/fi'
import { SiSpeedtest } from 'react-icons/si'
import { CgDatabase } from 'react-icons/cg'
import { GoBrowser } from 'react-icons/go'
import { FaReact } from 'react-icons/fa'
import { VscTools } from 'react-icons/vsc'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { IconType } from 'react-icons'
import Image from 'next/image'

const techSkills = [
  {
    title: 'React Ecosystem',
    parag:
      'Typescript, React, Tailwindcss, Chakra-UI, Swiper, ReactQuery, Recharts, React hook form, ...etc.',
    Icon: FaReact,
  },
  {
    title: 'Workflow Tools',
    parag:
      'Git, GitHub, Eslint, Prettier, Nx workspaces, Figma, Notion, Lucidchart, Sizzy browser',
    Icon: VscTools,
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
    parag: 'Nodejs, Strapi CMS, Nextjs, Redis, FaunaDB',
    Icon: CgDatabase,
    subtitle: ' (familiar)',
  },

  {
    title: 'Interested in',
    parag: 'Astro, Cypress, Storybook, xState, AWS, GitHub Actions, SolidJS',
    Icon: BiHappyHeartEyes,
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
        <Icon className="text-slate-300" />
        <h3 className="font-sans font-bold tracking-tighter uppercase text-slate-300 md:text-xl">
          {title}
          <span className="ml-1 text-base italic font-normal normal-case">
            {subtitle}
          </span>
        </h3>
      </div>
      <p className="leading-5 tracking-tighter md:text-xl pl-7 text-slate-300">
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
    <section
      id="Home"
      className="max-w-[1024px] mx-auto px-2 md:px-6 py-8 lg:pt-16"
    >
      <div className="w-full backdrop-blur-lg container-white">
        <div className="mb-6 xs:pb-4">
          <div className="flex flex-col items-center justify-between pb-4 gap-6 border-b sm:flex-row">
            <div>
              <h1 className="mb-2 font-sans text-3xl font-extrabold text-slate-300">
                UX-Driven Frontend Engineer
              </h1>
              <div>
                <p className="mb-6 leading-6 text-slate-300 xl:max-w-2xl xl:text-lg">
                  I help companies and individuals build web applications with
                  clean UI, intuitive UX, and high performance. I can work for
                  you on-site if you are in Hamburg or remotely if you are in EU
                  time zones. Feel free to reach out if you think I could fit
                  into your team.
                </p>
                <a
                  href="mailto: ali.hussein.pre@gmail.com"
                  className="w-full h-12 py-2 font-semibold rounded relative overflow-hidden select-none text-gray-200 sm:max-w-[190px]  bg-gray-100/10 px-4 duration-200 hover:bg-gray-100/20"
                >
                  Get in touch &#128075;
                </a>
              </div>
            </div>
            <div className="mask mask-squircle">
              <Image
                src="/me.png"
                width="320"
                height="320"
                loading="eager"
                alt="me"
                className=""
              />
            </div>
          </div>
        </div>
        <h2 className="mb-2 font-sans text-2xl font-extrabold text-left lg:text-3xl h1 text-slate-300">
          Toolbox
        </h2>
        <div className="mb-4 leading-8 border-b text-slate-900 lg:grid lg:grid-cols-2 lg:gap-x-3">
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
          className="w-full h-12 py-2 font-semibold rounded relative overflow-hidden select-none text-gray-200 active:translate-y-1 sm:max-w-[190px]  bg-gray-100/10 px-4 duration-200 hover:bg-gray-100/20"
        >
          <Link href="/cv.pdf" passHref>
            <span className="flex items-center justify-center gap-x-2">
              <FiDownloadCloud />
              <span>Download CV</span>
            </span>
          </Link>
        </button>
      </div>
    </section>
  </>
)
export default Index
