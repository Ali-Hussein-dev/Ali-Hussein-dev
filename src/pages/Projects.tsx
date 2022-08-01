import { Heading } from '@chakra-ui/react'
import { Text } from '@mantine/core'
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
      'TS, Nextjs, React, FaunaDB, Redis, Jest, Testing-Library, Tailwindcss, Chakra-UI, Uploadcare, Nx-Workspaces, Ajv',
    src: '/projects-videos/dashboard-menu.mp4',
    vidType: 'video/mp4',
    href2: 'https://smart-menu-demo.vercel.app/en-us',
    href3:
      'https://menu-1-git-theme-ali-hussein.vercel.app/restaurants/123/menu',
  },
  {
    href: 'https://find-meaning.vercel.app/',
    name: 'Find-Meaning dictionary',
    description:
      'English dictionary with basic defintions section, community usage and related gifs to the search keyword',
    stack: 'TS, Nextjs, React, Jest, Tailwindcss, Chakra-UI, MongoDB, PWA',
    src: '/projects-videos/find-meaning.mp4',
    vidType: 'video/mp4',
    href2: 'https://find-meaning.web.app/',
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
  href2?: string | null
  href3?: string | null
  stack: string
  description: string
  src?: string
}> = ({ name, href, description, stack, src, href2 = null, href3 = null }) => (
  <div className="flex flex-col mb-10 border-b border-gray-400">
    {src && (
      <div className="mb-3 overflow-hidden rounded-sm aspect-video">
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
      <p className="italic text-gray-300">
        <span className="block font-bold">STACK</span>
        {stack}
      </p>
      <div className="flex flex-col justify-center md:justify-start md:gap-x-2 md:flex-row">
        <Link href={href}>
          <Text size="xl">Demo</Text>
        </Link>
        {href2 !== null && (
          <Link href={href2}>
            <Text size="xl">Old Version 1</Text>
          </Link>
        )}
        {href3 !== null && (
          <Link href={href3}>
            <Text size="xl">Old Version 2</Text>
          </Link>
        )}
      </div>
    </div>
  </div>
)
const Link: React.FC<{ href: string; children: string | React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center h-10 px-2 mt-2 gap-2 text-xl underline rounded md:text-2xl text-slate-900 underline-offset-1 hover:bg-slate-900 hover:text-slate-300 group"
  >
    <span className="">{children}</span>
    <FiExternalLink size="17" className="opacity-0 group-hover:opacity-100" />
  </a>
)
//=======================
const Projects: React.FC = () => (
  <section id="Projects" className="layout">
    <Head>
      <title>Projects</title>
    </Head>
    <div className="container-white">
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
          href2={o?.href2}
          href3={o?.href3}
          description={o.description}
          stack={o.stack}
          src={o.src}
        />
      ))}
    </div>
  </section>
)
export default Projects
