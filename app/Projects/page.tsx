import { Metadata } from 'next'
import Image from 'next/image'
import * as React from 'react'
import projects from '../../db/projects.json'
import { ReactPlayer } from '@/components/client-components'
import { CiCalendarDate } from 'react-icons/ci'
import { Title } from '@/components/Title'
//=======================
const ProjectCard: React.FC<{
  name: string
  href: string
  stack: string
  description: string
  src?: string
  imgSrc?: string
  date: string
}> = ({ imgSrc = '', name, href, description, stack, src, date }) => (
  <div className="mb-4 space-y-2 overflow-hidden rounded-sm break-inside bg-black shadow-orange-800/10 shadow-lg">
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

    <div className="flex flex-col justify-between flex-grow px-2 pb-2 tracking-tight text-zinc-300">
      <div className="py-2">
        <h3 className="mb-1 font-bold text-base uppercase text-gray-200">
          {name}
        </h3>
        <p className="text-gray-400 text-base">{description}</p>
        <div className="flex-row-start flex-wrap gap-1 pt-6">
          {stack.split(' ').map((s) => (
            <span
              key={s}
              className="text-sm text-zinc-200 bg-yellow-600/30 rounded-sm px-2 py-[2px]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-row-between flex-wrap pt-2 border-t-[1px] border-zinc-800">
        <div className="flex-row-start gap-1">
          <CiCalendarDate />
          <span className="text-xs">{date}</span>
        </div>
        <Link href={href}>
          <span>Visit</span>
        </Link>
      </div>
    </div>
    <div className="h-[0.5px] bg-gradient-to-r from-transparent via-orange-600 to-transparent" />
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
    className="flex-row-center px-4 text-lg rounded hover:underline h-9 text-slate-100 underline-offset-1 hover:bg-zinc-100/10 bg-zinc-900"
  >
    {children}
  </a>
)

export const metadata: Metadata = {
  title: 'Projects Page',
  description: 'Sample of my work',
}
//=======================
const Projects: React.FC = () => (
  <>
    <section id="Projects" className="layout">
      <Title title="Last Projects" />
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
            date={o.date}
          />
        ))}
      </div>
    </section>
  </>
)
export default Projects
