import Head from 'next/head'
import * as React from 'react'
import projects from '../../db/projects.json'
import { ProjectCard } from '@/components/project-card'
import { Title } from '@/components/Title'
//=======================
const Projects: React.FC = () => (
  <>
    <Head>
      <title>Projects</title>
    </Head>
    <section id="Projects" className="layout">
      <Title title="Last Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((o, i) => (
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
  </>
)
export default Projects
