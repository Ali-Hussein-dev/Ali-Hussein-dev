import { Text } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import projects from '../../db/projects.json'
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
      <ReactPlayer url={src} controls width="100%" height="100%" />
    ) : (
      <div className="relative aspect-video">
        <Image
          fill
          src={imgSrc as string}
          alt="project image"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dgytBwACwgFK5PrQiQAAAABJRU5ErkJggg=="
        />
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
