import Head from 'next/head'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    href: 'https://kartebuch.vercel.app/',
    name: 'Interactive-menü',
    description:
      'Dishes/drinks menü: digital menü for restaurants \nFeatures: dynamically-visible items, easy to navigate through items',
    stack:
      'TS, Nextjs, React, FaunaDB, Jest, Testing-Library, Tailwindcss, Chakra-UI, Imgix, Nx-Workspaces',
  },
  {
    href: 'https://find-meaning.vercel.app/',
    name: 'Find-Meaning dictionary',
    description:
      'English dictionary with basic defintions section, community usage and related gifs to the search keyword',
    stack: 'TS, Nextjs, React, Jest, Tailwindcss, Chakra-UI, MongoDB, PWA',
    src: '/projects-videos/find-meaning.mp4',
    vidType: 'video/mp4',
  },
  {
    href: 'https://gastro-abr.vercel.app/',
    name: 'Kellner-Abrechnung',
    description:
      'calculator \nFeatures: reduced settlement time by 40% and take over repetitive calculations for daily waiter’s tasks.',
    stack: 'TS, Next.js, React, Tailwindcss, PWA',
    src: '/projects-videos/kellner-abr.webm',
    vidType: 'video/webm',
  },
  {
    href: 'https://spreskill-app.web.app/',
    name: 'Spreskill',
    description: 'A landing page for a mobile app with Bootstrap',
    stack: 'Html, Bootsrap',
  },
]
//=======================
const ProjectCard: React.FC<{
  name: string
  href: string
  stack: string
  description: string
  src: string
  vidType: string
}> = ({ name, href, description, stack, src, vidType }) => (
  <div className="flex flex-col">
    {src && (
      <video className="mb-3 rounded-lg max-h-80" controls>
        <source src={src} type={vidType} />
      </video>
    )}
    <div className="pb-1 mb-4 border-b border-trueGray-200">
      <h2 className="mb-1 font-semibold uppercase">{name}</h2>
      <p className="">{description}</p>
      <p className="text-blueGray-400">
        <span className="font-semibold text-blueGray-700">Stack</span>: {stack}
      </p>
      <Link href={href}>demo</Link>
    </div>
  </div>
)
const Link: React.FC<{ href: string; children: string }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center w-24 mt-2 gap-1 text-blue-500 hover:text-blue-400"
  >
    {children} <FiExternalLink size="15" className="text-trueGray-400" />
  </a>
)
//=======================
const Projects: React.FC = () => (
  <section id="Projects" className="grid px-3 pt-6 place-items-center ">
    <Head>
      <title>Projects</title>
    </Head>
    <div className="py-4 md:w-8/12 lg:w-6/12">
      <h1 className="pb-1 mb-4 text-lg font-bold text-teal-500 border-b-4 border-teal-400">
        PROJECTS
      </h1>
      {projects.map((o, i) => (
        <ProjectCard
          key={i}
          name={o.name}
          href={o.href}
          description={o.description}
          stack={o.stack}
          src={o.src}
          vidType={o.vidType}
        />
      ))}
    </div>
  </section>
)
export default Projects
