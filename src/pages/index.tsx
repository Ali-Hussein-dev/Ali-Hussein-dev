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
      'Typescript, React, Tailwindcss, Zustand, Chakra-UI, Swiper, ReactQuery, Recharts, ...etc.',
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
    parag: 'Nextjs, Nodejs, Strapi CMS, Redis, FaunaDB',
    Icon: CgDatabase,
    subtitle: ' (familiar)',
  },

  {
    title: 'Interested in',
    parag: 'Astro, React Native, AWS, GitHub Actions, Storybook, Cypress',
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
//=======================
const Index: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div
      id="Home"
      className="max-w-[1024px] mx-auto px-4 md:px-6 py-8 lg:pt-16"
    >
      <div className="w-full pb-8 space-y-8">
        {/* //------------------------------Hero */}
        <section className="xs:pb-4">
          <div className="flex flex-col items-center justify-between pb-4 gap-6 prose sm:flex-row">
            <div>
              <h1 className="mb-2 font-sans text-2xl font-extrabold md:text-3xl text-slate-200">
                UX-Driven Frontend Engineer
              </h1>
              <div>
                <p className="mb-4 leading-6 text-slate-200 sm:max-w-prose xl:text-lg">
                  I help companies and individuals build web applications with
                  clean UI, intuitive UX, and high performance. I can work for
                  you on-site if you are in Hamburg or remotely if you are in EU
                  time zones. Feel free to reach out if you think I could fit
                  into your team.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto: ali.hussein.pre@gmail.com"
                    className="row-center h-12 px-4 py-2 font-semibold text-gray-100 duration-200 rounded select-none bg-transparent  hover:bg-gray-100 hover:text-gray-800 sm:max-w-[190px] border-[0.5px] border-gray-800"
                  >
                    Get in touch
                  </a>
                  {/* <button
                    type="button"
                    className="w-full h-12 py-2 font-semibold rounded select-none text-gray-100 active:translate-y-1 sm:max-w-[190px]  px-4 duration-200 hover:bg-gray-100/20 border border-gray-500"
                  >
                    <Link href="/cv.pdf" passHref>
                      <span className="flex items-center justify-center gap-x-2">
                        <FiDownloadCloud />
                        <span>Download CV</span>
                      </span>
                    </Link>
                  </button> */}
                </div>
              </div>
            </div>
            <div className="mask mask-squircle">
              <Image
                src="/me.png"
                width="320"
                height="320"
                loading="eager"
                alt="me"
                className="brightness-[0.70]"
              />
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
