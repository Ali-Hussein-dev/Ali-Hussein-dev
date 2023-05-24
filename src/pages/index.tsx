import Head from 'next/head'
import { SiSpeedtest } from 'react-icons/si'
import { CgDatabase } from 'react-icons/cg'
import { GoBrowser } from 'react-icons/go'
import { FaReact } from 'react-icons/fa'
import { VscTools } from 'react-icons/vsc'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { IconType } from 'react-icons'
import Image from 'next/image'
import { BorderGradientContainer, Testimonials } from '../components'
const GridBG = () => (
  <svg
    className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
        width="200"
        height="200"
        x="50%"
        y="-1"
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y="-1" className="overflow-visible fill-zinc-800/20">
      <path
        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        strokeWidth="0"
      />
    </svg>
    <rect
      width="100%"
      height="100%"
      strokeWidth="0"
      fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
    />
  </svg>
)
//======================================
export const Workflow = () => {
  return (
    <section>
      <h2 className="mb-4 font-sans text-2xl font-extrabold text-left lg:text-3xl text-slate-200">
        My Workflow
      </h2>
      <p className="mb-8 leading-6 text-slate-200 xl:text-lg">
        I am using the Agile methodology for software development, which
        involves analyzing and planning the requirements and then iteratively
        building the software, continuously improving the website design and
        functionality to quickly deliver value to customers. This approach
        involves smaller, market-ready launches rather than traditional large
        launches, and each iteration is based on customer feedback to ensure the
        product is successful when it is deployed.
      </p>

      <Image
        src="/workflow.png"
        alt="workflow"
        width={1000}
        height={450}
        className="hidden mx-auto md:block"
      />
      <Image
        src="/workflow_mobile.png"
        alt="workflow"
        width={320}
        height={800}
        className="mx-auto md:hidden"
      />
    </section>
  )
}

const techSkills = [
  {
    title: 'React Ecosystem',
    parag:
      'Typescript, React, Tailwindcss, Zustand, Mantine, Swiper, ReactQuery, Recharts, ...etc.',
    Icon: FaReact,
  },
  {
    title: 'Workflow Tools',
    parag: 'Git, GitHub, Eslint, Nx workspaces, Figma, Notion, Sizzy browser',
    Icon: VscTools,
  },
  {
    title: 'Frontend',
    parag: 'JavaScript(ES6), Html5, CSS3, Browser APIs',
    Icon: GoBrowser,
  },
  {
    title: 'Quality Assurance',
    parag: 'Jest, React Testing Library',
    Icon: SiSpeedtest,
  },
  {
    title: 'Backend',
    parag: 'Nextjs, Nodejs, Supabase, Redis',
    Icon: CgDatabase,
    subtitle: ' (familiar)',
  },

  {
    title: 'Interested in',
    parag: 'Astro, React Native, GitHub Actions, Storybook',
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
    <BorderGradientContainer>
      <div className="row-start gap-x-2">
        <Icon className="text-gray-300" size="20" />
        <div className="pb-1 mb-1 max-w-fit ">
          <h3 className="font-sans font-semibold leading-4 tracking-tighter text-gray-100">
            {title}
            <span
              hidden={!subtitle}
              className="ml-1 text-base italic font-normal normal-case"
            >
              {subtitle}
            </span>
          </h3>
        </div>
      </div>
      <p className="leading-5 tracking-tighter text-gray-400 md:text-xl pl-7">
        {parag}
      </p>
    </BorderGradientContainer>
  )
}
const description =
  "I specialize in crafting web applications with clean UI, intuitive UX, and exceptional performance for both companies and individuals. My current focus revolves around developing AI-driven apps using OpenAI and Langchain technologies. If you believe my skills align with your team's needs, don't hesitate to get in touch."
//=======================
const Index: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div
      id="Home"
      className="max-w-[1024px] mx-auto px-4 md:px-6 py-8 lg:pt-16 "
    >
      <div className="w-full pb-8 space-y-8">
        <GridBG />
        {/* //------------------------------Hero */}
        <section className="xs:pb-4 relative">
          <div className="flex flex-col items-center justify-between pb-4 gap-6 prose sm:flex-row">
            <div className="mx-auto col-center">
              <h1 className="mb-4 font-sans text-2xl font-extrabold md:text-4xl gradientText text-center">
                UX-Driven Frontend Engineer
              </h1>
              <p className="mb-4 leading-6 text-zinc-400 xl:text-lg text-center max-w-3xl">
                {description}
              </p>
              <a
                href="mailto: ali.hussein.pre@gmail.com"
                className="primary-btn border-[0.5px] block mx-auto w-fit"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
        {/* //------------------------------Testimonials */}
        <section>
          <h2 className="mb-4 font-sans text-2xl font-extrabold text-left lg:text-3xl text-slate-200">
            Testimonials
          </h2>
          <Testimonials />
        </section>
        {/* //------------------------------Workflow */}
        <Workflow />
        {/* //------------------------------Tech skills */}
        <section>
          <h2 className="mb-2 font-sans text-2xl font-extrabold text-left lg:text-3xl text-slate-200">
            Toolbox
          </h2>
          <div className="mb-4 space-y-3 leading-8 text-slate-900 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0">
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
        </section>
      </div>
    </div>
  </>
)
export default Index
