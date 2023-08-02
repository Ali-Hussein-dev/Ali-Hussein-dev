import { Testimonials } from './Testimonials'

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

export const Hero = () => (
  <section className="xs:pb-4 relative sm:h-[95vh] pt-10 lg:pt-32 grid place-items-center">
    <div className="flex-col-center sm:pb-12 gap-6 prose sm:flex-row pb-4">
      <div className="mx-auto flex-col-center">
        <h1 className="mb-4 text-3xl font-extrabold md:text-4xl lg:text-6xl gradientText text-center">
          UX-Driven <br /> Frontend Engineer
        </h1>
        <p className="mb-4 leading-6 text-zinc-400 md:text-xl text-center max-w-xl">
          I specialize in crafting{' '}
          <strong className="text-zinc-300"> AI-driven web apps</strong> with{' '}
          <strong className="text-zinc-300">
            clean UI design & intuitive UX
          </strong>
          . Feel free to reach out.
        </p>
        <a
          href="mailto: ali.hussein.pre@gmail.com"
          className="primary-btn border-[0.5px] block mx-auto w-fit"
        >
          Get in touch
        </a>
      </div>
    </div>
    <Testimonials />
  </section>
)
