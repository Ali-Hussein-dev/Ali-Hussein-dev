import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
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
        <p>{description}</p>
        <p className="mt-2">{stack}</p>
      </div>
      <div className="flex flex-wrap items-center justify-end ">
        <Link href={href}>
          <span>Visit</span>
        </Link>
        {code && (
          <a
            href={code}
            className="grid w-10 rounded h-9 hover:bg-gray-100/10 place-items-center"
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
    className="flex items-center px-2 text-lg rounded hover:underline h-9 text-slate-100 underline-offset-1 hover:bg-gray-100/10"
  >
    <span className="">{children}</span>
  </a>
)
//=======================
const Projects: React.FC = () => (
  <section id="Projects" className="layout">
    <Head>
      <title>Projects</title>
    </Head>
    <div className="container-white max-w-5xl">
      <h1 className="pb-1 mb-4 border-b h1 text-primary-200 border-zinc-700">
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
