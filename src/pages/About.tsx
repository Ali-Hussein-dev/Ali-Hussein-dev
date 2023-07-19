import Head from 'next/head'
import * as React from 'react'
import myStory from '../../db/aboutme.json'

const Aboutme: React.FC = () => (
  <>
    <Head>
      <title>About</title>
    </Head>
    <section id="About" className="layout">      
        <h1 className="pb-1 text-xl border-b text-zinc-500 border-zinc-900 mb-4 uppercase">
          My Story
        </h1>
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
