import React from 'react'
import { AnchorButton } from './button'

export const Hero = () => {
  return (
    <div
      className={
        "[background-image:url('/hero-bg.svg')] bg-no-repeat mx-auto bg-center md:-translate-y-14"
      }
    >
      <section className="xs:pb-4 relative grid place-items-center">
        <div className="flex-col-center prose h-[94svh]">
          <div className="mx-auto flex-col-center font-sora md:translate-y-14">
            <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl text-center font-black">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Transforming <br /> Ideas into{' '}
                <span className="text-theme-primary">Impact</span>
              </span>
            </h1>
            <p className="mb-8 leading-6 text-theme-secondary md:text-xl text-center ">
              Your Trusted Web Development Partner
            </p>
            <AnchorButton href="mailto: ali.hussein.pre@gmail.com">
              {"Don't Wait,  Reacht out"}
            </AnchorButton>
          </div>
        </div>
      </section>
    </div>
  )
}
