import { SiSpeedtest } from 'react-icons/si'
import { CgDatabase } from 'react-icons/cg'
import { GoBrowser } from 'react-icons/go'
import { FaReact } from 'react-icons/fa'
import { VscTools } from 'react-icons/vsc'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { IconType } from 'react-icons'

const techSkills = [
  {
    title: 'React Ecosystem',
    parag:
      'Nextjs, React, Tailwindcss, Zustand, Mantine, Swiper, ReactQuery, Recharts, ...etc.',
    Icon: FaReact,
  },
  {
    title: 'Workflow Tools',
    parag: 'Git, GitHub, Eslint, Nx workspaces, Figma, Notion, Sizzy browser',
    Icon: VscTools,
  },
  {
    title: 'Basics',
    parag: 'Typescript, JavaScript(ES6), Html5, CSS3, browser APIs',
    Icon: GoBrowser,
  },
  {
    title: 'Quality Assurance',
    parag: 'Jest, React Testing Library',
    Icon: SiSpeedtest,
  },
  {
    title: 'Backend & DevOps',
    parag: 'Nodejs, Supabase, Vercel, Sanity',
    Icon: CgDatabase,
    subtitle: ' ( familiar )',
  },

  {
    title: 'Interested in',
    parag: 'GitHub Actions, TurboRepo, AWS',
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
    <div className="p-4 pt-8 rounded-lg bg-gradient-to-b from-zinc-900 via-zinc-900/20 to-transparent">
      <div className="flex-row-start gap-x-2">
        <Icon className="text-primary-600 mb-1" size="20" />
        <div className="pb-1 mb-1 max-w-fit ">
          <h3 className="font-semibold leading-4 tracking-tighter text-zinc-200">
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
      <p className="leading-6 text-zinc-400 md:text-xl pl-7">{parag}</p>
    </div>
  )
}
export const Toolbox = () => (
  <section>
    <h2 className="mb-3 text-2xl font-extrabold text-left lg:text-3xl text-slate-200">
      Toolbox
    </h2>
    <div className="mb-4 space-y-3 leading-8 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
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
)
