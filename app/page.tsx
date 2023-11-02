import { Toolbox } from '@/components/Toolbox'
import { Workflow } from '@/components/Workflow'
import { GridBG, Hero } from '@/components/Hero'
import { ProjectCard } from '@/components/project-card-2'
import * as React from 'react'
import projects from '../db/projects.json'

//=======================
const Projects: React.FC = () => (
  <section className="py-10">
    <h2 className="mb-4 text-2xl font-extrabold text-left lg:text-3xl text-slate-200">
      Last Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-1">
      {projects
        .sort((a, b) => +b.date - +a.date)
        .map((o, i) => (
          <ProjectCard
            key={i}
            name={o.name}
            href={o.href}
            description={o.description}
            stack={o.stack}
            imgSrc={o.imgSrc}
            date={o.date}
          />
        ))}
    </div>
  </section>
)

//=======================
export default function Page() {
  return (
    <>
      <GridBG />
      <div id="Home" className=" px-4 lg:px-0 z-20">
        <div className="max-w-4xl mx-auto w-full pb-8 space-y-8">
          <Hero />
          <div className="max-w-4xl mx-auto pb-10">
            {/* <AiProviders /> */}
            <Workflow />
            <Projects />
            <Toolbox />
          </div>
        </div>
      </div>
    </>
  )
}
