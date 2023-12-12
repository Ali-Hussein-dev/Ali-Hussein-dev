import React from 'react'
import { AnchorButton } from './button'

export const Hero = () => {
  return (
    <section className="xs:pb-4 relative grid place-items-center">
      <div>
        <div className="flex-col-center prose h-[95svh]">
          <div className="mx-auto flex-col-center bg-zinc-950/60">
            <h1 className="mb-4 text-4xl font-custom md:text-5xl lg:text-6xl  text-center font-black">
              <span className="gradientText block">UX Driven</span>
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Product Engineer
              </span>
            </h1>
            <div className="mb-6 leading-6 text-zinc-300 md:text-xl text-center max-w-2xl">
              I specialize in crafting web apps with
              <span className="text-zinc-300 block">
                <strong>clean UI</strong>, <strong>intuitive UX</strong> and{' '}
                <strong>modern stack</strong>
              </span>
            </div>
            <AnchorButton href="mailto: ali.hussein.pre@gmail.com">
              Get in touch
            </AnchorButton>
          </div>
        </div>
      </div>
    </section>
  )
}
