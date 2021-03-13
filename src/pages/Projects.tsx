import Head from 'next/head'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    href: 'https://smart-menu-demo.vercel.app/',
    name: 'Interactive-menu',
    description:
      'Dishes/drinks menu: digital menu for restaurants \nFeatures: cost-effective, user-friendly, dynamic items, paperless.',
    stack: 'TS, Next.js, React, Jest, Testing-Library, Tailwind, Chakra-UI',
  },
  {
    href: 'https://find-meaning.vercel.app/',
    name: 'Find-Meaning',
    description: 'English dictionary with gifs',
    stack: 'TS,Nextjs, React, Jest, Tailwind, Chakra-UI',
  },
  {
    href: 'https://gastroabrechnung.firebaseapp.com/',
    name: 'Gastroabrechnung',
    description:
      'An special calculator \nFeatures: reduced work time by 40% and removed repetitive calculations for waiter’s daily tasks with Javascript.',
    stack: 'Html, Bootstrap',
  },
  {
    href: 'https://spreskill-app.web.app/',
    name: 'Spreskill',
    description: 'A landing page with Bootstrap',
    stack: 'Html, Bootsrap',
  },
]
//=======================
const ProjectCard: React.FC<{
  name: string
  href: string
  stack: string
  description: string
}> = ({ name, href, description, stack }) => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="pb-1 mb-4 border-b border-trueGray-200">
      <h2 className="mb-1 font-semibold uppercase">{name}</h2>
      <p className="">{description}</p>
      <p className="">
        <span className="font-semibold ">Stack</span>: {stack}
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
      className="flex items-center mt-2 gap-1 hover:text-blue-400"
    >
      {children} <FiExternalLink size="15" className="text-trueGray-400" />
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
      <div className="py-4 md:w-9/12 lg:w-7/12">
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
          />
        ))}
      </div>
    </section>
  )
}
export default Projects
