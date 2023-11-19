import React from 'react'
import { Testimonials } from './Testimonials'
import { AnchorButton } from './button'

export const GridBG = () => (
  <svg
    className="absolute -inset-[-20] h-full w-full stroke-white/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
        width="200"
        height="200"
        x="50%"
        y="-1"
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y="-1" className="overflow-visible fill-zinc-800/20">
      <path
        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        strokeWidth="0"
      />
    </svg>
    <rect
      width="100%"
      height="100%"
      strokeWidth="0"
      fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
    />
  </svg>
)

export const Hero = () => {
  return (
    <section className="xs:pb-4 relative pt-20 lg:pt-28 grid place-items-center">
      <div>
        <div className="flex-col-center sm:pb-12 gap-6 prose sm:flex-row pb-4 h-[75svh]">
          <div className="mx-auto flex-col-center">
            <h1 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl gradientText text-center">
              UX-Driven <br /> Product Engineer
            </h1>
            <p className="mb-6 leading-6 text-zinc-400 md:text-xl text-center max-w-2xl">
              I specialize in crafting{' '}
              <strong className="text-zinc-300"> AI-driven web apps</strong>{' '}
              with{' '}
              <strong className="text-zinc-300 block">
                clean UI design & intuitive UX
              </strong>
            </p>
            <AnchorButton href="mailto: ali.hussein.pre@gmail.com">
              Get in touch
            </AnchorButton>
          </div>
        </div>
        <Testimonials />
      </div>
    </section>
  )
}
