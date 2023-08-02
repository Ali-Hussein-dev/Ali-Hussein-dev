import Image from 'next/image'
import { BsFillPatchCheckFill } from 'react-icons/bs'
//======================================
const SocialMedia = () => (
  <div className="flex flex-col items-center justify-center mb-2 sm:flex-row sm:gap-x-8 w-full">
    <ul className="space-y-2">
      {[
        'Professional looking design',
        'Professional social media presence',
        'More traffic more sales',
      ].map((str) => (
        <li
          key={str}
          className="flex gap-x-2 items-center text-xl text-zince-300"
        >
          <BsFillPatchCheckFill className="text-green-300 " />
          {str}
        </li>
      ))}
    </ul>
    <div className="relative h-72 md:h-96 aspect-square">
      <Image
        src="/social-media.png"
        fill
        alt="social media"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dgytBwACwgFK5PrQiQAAAABJRU5ErkJggg=="
      />
    </div>
  </div>
)
const ads = [
  {
    id: 1,
    aspectRatio: '1/1.4',
  },
  {
    id: 2,
    aspectRatio: '1/1',
  },
  {
    id: 3,
    aspectRatio: '1/1',
  },
  {
    id: 13,
    aspectRatio: '1/1',
  },
  {
    id: 4,
    aspectRatio: '1/1',
  },
  {
    id: 5,
    aspectRatio: '1/1',
  },
  {
    id: 8,
    aspectRatio: '1/1',
  },
  {
    id: 10,
    aspectRatio: '1/1',
  },
  {
    id: 6,
    aspectRatio: '4/3',
  },
  {
    id: 9,
    aspectRatio: '1/1',
  },
  {
    id: 11,
    aspectRatio: '1.2/1',
  },
  {
    id: 12,
    aspectRatio: '1/1',
  },
  {
    id: 7,
    aspectRatio: '1/1.3',
  },
  {
    id: 14,
    aspectRatio: '4/3.4',
  },
]
//======================================
const CtaButton = () => (
  <a
    href="mailto:ali.hussein.pre@gmail.com"
    className="primary-btn border-[0.5px]"
  >
    Get One For FREE
  </a>
)

//======================================
const Design = () => {
  return (
    <>
      <section id="Design" className="layout">
        <div className="mb-8 flex-col flex px-6 pt-6 gap-y-8 text-primary-50 mx-auto">
          <div className="py-4 sm:px-12 px-1 highlight highlight-zinc-900 highlight-variant-2 highlight-spread-lg">
            <h2 className="md:text-4xl text-2xl font-black text-center gradientText">
              Professional Social Media Posts
            </h2>
          </div>
          <p className="text-2xl leading-8 mb-4 text-center mx-auto max-w-2xl text-zinc-400">
            Drive more traffic to your website business and increase your sales
            with professional-designed posts.
          </p>
          <CtaButton />
        </div>
        <SocialMedia />
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-8 pb-2">
          Sample Posts
        </h2>
        <div className="relative bottom-gradient">
          <div className="md:masonry-cols-3 sm:masonry-cols-2">
            {ads.map(({ id, aspectRatio }) => (
              <div
                key={id}
                className={`relative group mb-4 break-inside overflow-hidden`}
                style={{
                  aspectRatio,
                }}
              >
                {/* don't delete use for debuging */}
                {/* <span className="absolute bg-slate-700 z-10">{id}</span> */}
                <Image
                  fill
                  src={`/ads/ad (${id}).png`}
                  alt=""
                  quality={50}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dgytBwACwgFK5PrQiQAAAABJRU5ErkJggg=="
                  className="object-cover duration-1000 group-hover:scale-110 rounded-sm"
                />
              </div>
            ))}
          </div>
          {/* <div className="h-44 w-full bg-gradient-to-t from-zinc-950 to-zinc-100/[0.03] -via-neutral-200/[0.02] absolute bottom-0"></div> */}
        </div>
        <div className="flex justify-center pt-10 max-auto">
          <CtaButton />
        </div>
      </section>
    </>
  )
}

export default Design
