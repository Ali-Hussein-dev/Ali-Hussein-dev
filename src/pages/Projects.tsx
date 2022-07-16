import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { Player, BigPlayButton } from 'video-react'
const projects = [
  {
    href: 'https://green-menus.vercel.app/',
    name: 'Interactive-menü',
    description:
      'Saas App: digital menus platform that enables restaurants owners to host and update their menus',
    stack:
      'TS, Nextjs, React, FaunaDB, Redis, Jest, Testing-Library, Tailwindcss, Chakra-UI, Uploadcare, Nx-Workspaces',
    src: '/projects-videos/dashboard-menu.mp4',
    vidType: 'video/mp4',
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
      'special calculator made for waiters. It reduces calculation time by 40% approximately.',
    stack: 'TS, Next.js, React, Tailwindcss, PWA',
    src: '/projects-videos/kellner-abr.mp4',
    vidType: 'video/mp4',
  },
  {
    href: 'https://spreskill-app.web.app/',
    name: 'Spreskill',
    description: 'A landing page for a mobile app with Bootstrap',
    stack: 'Html, Bootstrap',
  },
]

//=======================
const ProjectCard: React.FC<{
  name: string
  href: string
  stack: string
  description: string
  src?: string
}> = ({ name, href, description, stack, src }) => (
  <div className="flex flex-col mb-10 border-b border-gray-400">
    {src && (
      <div className="mb-3 overflow-hidden rounded-xl aspect-video">
        {/* @ts-expect-error debug later */}
        <Player>
          <BigPlayButton position="center" />
          <source src={src} />
        </Player>
      </div>
    )}
    <div className="pb-1 ">
      <h2 className="mb-1 font-semibold uppercase">{name}</h2>
      <p className="">{description}</p>
      <p className="text-gray-400">
        <span className="font-semibold text-gray-100">Stack</span>: {stack}
      </p>
      <Link href={href}>Demo</Link>
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
    className="flex items-center w-20 px-2 mt-2 gap-1 text-blue-500 rounded hover:bg-black bg-black/30"
  >
    {children} <FiExternalLink size="15" />
  </a>
)
//=======================
const Projects: React.FC = () => (
  <section
    id="Projects"
    className="grid items-start justify-center px-1 py-6 mx-auto md:px-2 lg:w-9/12"
  >
    <Head>
      <title>Projects</title>
    </Head>
    <div className="w-full px-4 py-6 mx-auto bg-white/20 rounded-2xl backdrop-blur-2xl">
      <Heading
        as="h1"
        className="pb-1 mb-4 font-bold border-b text-primary-400 border-primary-300"
      >
        Last Projects
      </Heading>
      {projects.map((o, i) => (
        <ProjectCard
          key={i}
          name={o.name}
          href={o.href}
          description={o.description}
          stack={o.stack}
          src={o.src}
        />
      ))}
    </div>
  </section>
)
export default Projects
