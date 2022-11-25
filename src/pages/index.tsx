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
      'Typescript, React, Nextjs, Tailwindcss, Chakra-UI, Swiper, ReactQuery, Recharts, React hook form, ...etc.',
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
    parag: 'Nodejs, Redis, FaunaDB',
    Icon: CgDatabase,
    subtitle: ' (familiar)',
  },

  {
    title: 'Interested in',
    parag:
      'Headless CMS, Cypress, Storybook, xState, AWS, GitHub Actions, Astro, SolidJS',
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
        <Icon className="text-slate-700" />
        <h3 className="font-sans font-bold tracking-tighter uppercase text-slate-700 md:text-xl">
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
    <section
      id="Home"
      className="max-w-[1024px] mx-auto px-2 md:px-6 py-8 lg:pt-16"
    >
      <div className="w-full bg-white container-white">
        <div className="mb-2 xs:pb-4">
          <div className="flex flex-col items-center justify-between pb-4 gap-6 border-b sm:flex-row">
            <div>
              <h1 className="font-sans font-extrabold h1 text-slate-700">
                UX-Driven Frontend Engineer
              </h1>
              <div>
                <p className="mb-6 leading-6 text-slate-700">
                  I help companies and individuals build web applications with
                  clean UI, intuitive UX, and high performance. I can work for
                  you on-site if you are in Hamburg or remotely if you are in EU
                  time zones. Feel free to reach out if you think I could fit
                  into your team.
                </p>
                <a
                  href="mailto: ali.hussein.pre@gmail.com"
                  className="w-full h-10 py-1 font-semibold rounded-lg relative overflow-hidden select-none  border-sky-600 border-2 text-sky-600  active:translate-y-1 sm:max-w-[190px] hover:text-slate-50 hover:bg-sky-600  px-2"
                >
                  Get in touch &#128075;
                </a>
              </div>
            </div>
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
        <h2 className="mb-1 font-sans text-2xl font-extrabold text-left lg:text-2xl h1 text-slate-700">
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
          className="w-full h-10 rounded-lg select-none  hover:bg-slate-900 bg-slate-900/90 active:translate-y-1 sm:max-w-[230px] sm:justify-start"
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
