import { Workflow } from '@/components/Workflow'
import { Hero } from '@/components/Hero'
import { ProjectCard } from '@/components/project-card-2'
import * as React from 'react'
import projects from '../db/projects.json'
import { Testimonials } from '@/components/Testimonials'
import { Techs } from '@/components/tech/Techs'
import { Benefits } from '@/components/benefits/Benefits'
import { About } from '@/components/About'

// {
//   "href": "https://spreskill-app.web.app/",
//   "name": "Spreskill",
//   "description": "A landing page for a mobile app with Bootstrap",
//   "imgSrc": "/projects-videos/spreskill.png",
//   "stack": "Html Bootstrap",
//   "date": "2020"
// }
//=======================
const Projects: React.FC = () => (
  <section className="py-10 bg-gradient-to-b from-zinc-950/40 to-zinc-950/50 via-zinc-950">
    <h2 className="title">Recent Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-1">
      {projects
        .sort((a, b) => +b.date - +a.date)
        .map((o, i) => (
          <ProjectCard
            key={i}
            i={i}
            name={o.name}
            href={o.href}
            description={o.description}
            stack={o.stack}
            imgSrc={o.imgSrc}
            date={o.date}
            playstore={o.playstore}
          />
        ))}
    </div>
  </section>
)

//=======================
export default function Page() {
  return (
    <div className="circle-grid w-full max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 w-full">
        <div id="Home" className="px-4 lg:px-0">
          <Hero />
          <div className="mx-auto max-w-5xl pb-10 space-y-8 md:px-4">
            {/* <AiProviders /> */}
            <Testimonials />
            <Benefits />
            <Projects />
            <Workflow />
          </div>
          <Techs />
        </div>
        <About />
      </div>
    </div>
  )
}
