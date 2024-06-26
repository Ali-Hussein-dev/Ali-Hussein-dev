import * as React from 'react'
import myStory from '../../db/aboutme.json'
import { Metadata } from 'next'
import { Title } from '@/components/Title'
import { BlueTopGradient } from '@/components/blue-top-gradient/blue-top-gradient'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page',
}

const Aboutme: React.FC = () => (
  <div className="w-full relative">
    <BlueTopGradient />
    <section id="About" className="layout pt-8 animate-in">
      <Title title="My story" />
      <article className="text-zinc-500 animate-in">
        {myStory.map((section) => (
          <div key={section.title}>
            <h2 className="font-semibold uppercase md:text-2xl mt-8 text-zinc-400">
              {section.title}
            </h2>
            <div className="mb-4 space-y-2">
              {section.p.map((p, i) => (
                <p key={i} className="leading-8 tracking-wide text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  </div>
)
export default Aboutme
