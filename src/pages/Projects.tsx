import Head from 'next/head'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    href: 'https://smart-menu-demo.vercel.app/',
    name: 'Interactive-menu',
    description:
      'A food/drinks menu with sub-menus and prices that shows up and hides programmatically',
    tech: 'TS, Next.js, React, Jest, Testing-Library, Tailwind, Chakra-UI',
  },
  {
    href: 'https://find-meaning.web.app/',
    name: 'Find-meaning',
    description: 'fetchs data from APIs',
    tech: 'JS, React',
  },
  {
    href: 'https://gastroabrechnung.firebaseapp.com/',
    name: 'Gastroabrechnung',
    description: 'A alternative calculator exclusively for waiters tasks',
    tech: 'Html, Bootstrap',
  },
  {
    href: 'https://spreskill-app.web.app/',
    name: 'Spreskill',
    description: 'A landing page with bootstrap',
    tech: 'Html, Bootsrap',
  },
]
//=======================
const ProjectCard: React.FC<{
  name: string
  href: string
  tech: string
  description: string
}> = ({ name, href, description, tech }) => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="pb-1 mb-4 border-b border-blueGray-200">
      <h2 className="mb-1 font-semibold uppercase">{name}</h2>
      <p className="">{description}</p>
      <p className="text-blueGray-500">
        <span className="font-semibold">Techs used</span>: {tech}
      </p>
      <Link href={href}>demo</Link>
    </div>
  )
}
const Link: React.FC<{ href: string; children: string }> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 hover:text-blue-400"
    >
      {children} <FiExternalLink size="25" className="text-blueGray-400" />
    </a>
  )
}
//=======================
const Projects: React.FC = () => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <section id="Projects" className="grid px-3 pt-6 place-items-center ">
      <Head>
        <title>Projects</title>
      </Head>
      <div className="py-4 text-xl md:w-9/12 lg:w-7/12">
        <h1 className="mb-3 text-lg font-bold text-teal-500">Projects</h1>
        {projects.map((o, i) => (
          <ProjectCard
            key={i}
            name={o.name}
            href={o.href}
            description={o.description}
            tech={o.tech}
          />
        ))}
      </div>
    </section>
  )
}
export default Projects
