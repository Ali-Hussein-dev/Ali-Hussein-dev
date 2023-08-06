import * as React from 'react'
import myStory from '../../db/aboutme.json'
import { Metadata } from 'next'
import { Title } from '@/components/Title'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page',
}

const Aboutme: React.FC = () => (
  <>
    <section id="About" className="layout">
      <Title title="My story" />
      <article className="text-zinc-400">
        {myStory.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold uppercase md:text-2xl mt-8">
              {section.title}
            </h2>
            <div className="mb-4 space-y-2">
              {section.p.map((p, i) => (
                <p key={i} className="leading-8 tracking-wide">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  </>
)
export default Aboutme
