import { Text } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { Player, BigPlayButton } from 'video-react'
const projects = [
  {
    href: 'https://restaurant-starter-de.vercel.app/luxury',
    name: 'Restaurant Stater',
    description: 'Restaurant website',
    imgSrc: '/projects-videos/restaurant-starter-de.png',
    stack: 'Nextjs, React, Tailwindcss, DaisyUI',
  },
  {
    href: 'https://website-starter-next.vercel.app',
    name: 'Website Starter',
    description:
      'Website starter with a basic layout  and functionality that every typical website need.',
    stack: 'TS, Nextjs, React, Tailwindcss, DaisyUI',
    imgSrc: '/projects-videos/website-starter.png',
    code: 'https://github.com/Ali-Hussein-dev/website-starter',
  },
  {
    href: 'https://gastro-abr.vercel.app/',
    name: 'Calculator',
    description:
      'special calculator made for waiters. It reduces calculation time for finl statement by 60% approximately and it reduces miscalculations',
    stack: 'TS, Next.js, React, Tailwindcss, PWA',
    src: '/projects-videos/kellner-abr.mp4',
    vidType: 'video/mp4',
    code: 'https://github.com/Ali-Hussein-dev/kellener-abr',
  },
  {
    href: 'https://green-menus.vercel.app/',
    name: 'Dishes/Drinks Menu',
    description:
      'Saas App: digital menus platform that enables restaurants owners to host and update their menus',
    stack:
      'TS, Nextjs, React, FaunaDB, Redis, Jest, Testing-Library, Tailwindcss, Chakra-UI, Ajv',
    src: '/projects-videos/dashboard-menu.mp4',
    vidType: 'video/mp4',
    href2: 'https://smart-menu-demo.vercel.app/en-us',
    href3:
      'https://menu-1-git-theme-ali-hussein.vercel.app/restaurants/123/menu',
  },
  {
    href: 'https://find-meaning.vercel.app/',
    name: 'Dictionary',
    description:
      'English dictionary with basic defintions section, community usage and related gifs to the search keyword',
    stack: 'TS, Nextjs, React, Jest, Tailwindcss, Chakra-UI, MongoDB, PWA',
    src: '/projects-videos/find-meaning.mp4',
    vidType: 'video/mp4',
    href2: 'https://find-meaning.web.app/',
    code: 'https://github.com/Ali-Hussein-dev/find-meaning',
  },
  {
    href: 'https://table-example.vercel.app/',
    name: 'Table Example',
    description: 'Table Examaple with some typical functionalities',
    stack: 'TanStack/React-Table-v8, TS, Nextjs, React, Tailwindcss, Mantine',
    imgSrc: '/projects-videos/table-example.png',
    code: 'https://github.com/Ali-Hussein-dev/table-example',
  },
  {
    href: 'https://spreskill-app.web.app/',
    name: 'Spreskill',
    description: 'A landing page for a mobile app with Bootstrap',
    src: '/projects-videos/spreskill2.mp4',
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
  imgSrc?: string
  code?: string
}> = ({ imgSrc = '', name, href, description, stack, src, code }) => (
  <div className="mb-4 space-y-2 overflow-hidden rounded-sm break-inside ">
    {src ? (
      // @ts-expect-error debug later
      <Player>
        <BigPlayButton position="center" />
        <source src={src} />
      </Player>
    ) : (
      <div className="relative aspect-video">
        <Image src={imgSrc as string} layout="fill" alt="project image" />
      </div>
    )}

    <div className="flex flex-col justify-between flex-grow px-2 pb-2 tracking-tight text-slate-300">
      <div className="pb-1 border-b border-slate-600">
        <h3 className="mb-1 font-semibold uppercase text-primary-100">
          {name}
        </h3>
        <Text>{description}</Text>
        <Text className="mt-2">{stack}</Text>
      </div>
      <div className="flex flex-wrap items-center pt-1">
        <Link href={href}>
          <Text>Visit</Text>
        </Link>
        {code && (
          <a
            href={code}
            className="grid w-10 h-8 ml-1 rounded hover:bg-slate-900 place-items-center"
            target="black"
          >
            <FaGithub size="25" />
            <span className="sr-only">link to repo</span>
          </a>
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
    className="flex items-center h-8 px-3 gap-2 text-lg underline rounded text-slate-100 underline-offset-1 hover:bg-slate-900 group"
  >
    <span className="">{children}</span>
    <BiLinkExternal size="17" className="opacity-0 group-hover:opacity-100" />
  </a>
)
//=======================
const Projects: React.FC = () => (
  <section id="Projects" className="layout">
    <Head>
      <title>Projects</title>
    </Head>
    <div className="container-white blur-dark">
      <h1 className="pb-1 mb-2 border-b h1 text-primary-400 border-primary-300">
        Last Projects
      </h1>
      <div className="lg:masonry-cols-3 md:masonry-cols-2">
        {projects.map((o, i) => (
          <ProjectCard
            key={i}
            name={o.name}
            href={o.href}
            description={o.description}
            stack={o.stack}
            src={o.src}
            imgSrc={o.imgSrc}
            code={o.code}
          />
        ))}
      </div>
    </div>
  </section>
)
export default Projects
