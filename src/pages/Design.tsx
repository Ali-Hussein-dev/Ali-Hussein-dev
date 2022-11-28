import { clsx } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'
import { BsFillPatchCheckFill } from 'react-icons/bs'
//======================================
export const SocialMedia = () => (
  <div className="flex flex-col items-center justify-center mb-2 sm:flex-row gap-x-4 ">
    <div className="space-y-3">
      <p className="max-w-md text-xl leading-8">
        Drive more traffic to your website and increase your sales with
        professional-designed posts.
      </p>
      <ul className="space-y-2">
        {[
          'Professional Looking Design',
          'Attractive Post',
          'Correct size for platforms',
        ].map((str) => (
          <li key={str} className="flex gap-x-2">
            <BsFillPatchCheckFill className="text-green-300 " />
            {str}
          </li>
        ))}
      </ul>
    </div>
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

//======================================
export const CtaButton = () => (
  <a
    href="mailto:ali.hussein.pre@gmail.com"
    className={clsx(
      'px-6 py-3 border-2 border-primary-700 rounded-xl font-extrabold mx-auto',
      'hover:scale-105 active:scale-95 duration-300 hover:bg-primary-700 '
    )}
  >
    Get first one for FREE
  </a>
)

//======================================
const Design = () => {
  return (
    <>
      <Head>
        <title>Design</title>
      </Head>
      <section id="Design" className="grid px-2 place-items-center">
        <div className="w-full border lg:max-w-5xl py-14 container-white blur-dark border-slate-500">
          <div
            className={clsx(
              'mb-8 flex-col flex md:px-16 px-6 gap-y-8 text-primary-50'
            )}
          >
            <div
              className={clsx(
                ' py-2',
                'highlight highlight-primary-700 highlight-variant-7 highlight-spread-lg '
              )}
            >
              <h2
                className={clsx('md:text-4xl text-3xl font-black text-center ')}
              >
                Professional Social Media Posts
              </h2>
            </div>
            <CtaButton />
          </div>
          <SocialMedia />
          <h2
            className={clsx(
              'md:text-4xl text-3xl font-black text-center mb-4 border-b border-slate-500 pb-2'
            )}
          >
            Sample Posts
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {[...Array(14).keys()].map((n) => (
              <div
                key={n}
                className={'relative w-full  h-72 aspect-square group'}
              >
                <Image
                  fill
                  src={`/ads/ad (${n + 1}).png`}
                  alt=""
                  quality={50}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dgytBwACwgFK5PrQiQAAAABJRU5ErkJggg=="
                  className="object-contain duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center py-2 max-auto">
            <CtaButton />
          </div>
        </div>
      </section>
    </>
  )
}

export default Design
