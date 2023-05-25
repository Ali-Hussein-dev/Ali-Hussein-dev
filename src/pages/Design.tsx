import { clsx } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'
import { BsFillPatchCheckFill } from 'react-icons/bs'
//======================================
export const SocialMedia = () => (
  <div className="flex flex-col items-center justify-center mb-2 sm:flex-row sm:gap-x-8 w-full">
    <ul className="space-y-2 text-2xl">
      {[
        'Professional looking design',
        'Professional business image in social media',
        'More traffic more sales',
      ].map((str) => (
        <li key={str} className="flex gap-x-2">
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

//======================================
export const CtaButton = () => (
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
      <Head>
        <title>Design</title>
      </Head>
      <section id="Design" className="grid px-2 py-8 place-items-center">
        <div className="w-full lg:max-w-5xl py-14 container-white">
          <div className="mb-8 flex-col flex px-6 gap-y-8 text-primary-50 max-w-fit mx-auto">
            <div
              className={clsx(
                'py-4 sm:px-12 px-1',
                'highlight highlight-zinc-900 highlight-variant-2 highlight-spread-lg '
              )}
            >
              <h2
                className={clsx(
                  'md:text-4xl text-2xl font-black text-center gradientText'
                )}
              >
                Professional Social Media Posts
              </h2>
            </div>
            <p className="text-2xl leading-8 mb-4 text-center mx-auto max-w-2xl text-zinc-400">
              Drive more traffic to your website business and increase your
              sales with professional-designed posts.
            </p>
            <CtaButton />
          </div>
          <SocialMedia />
          <h2 className="md:text-4xl text-3xl font-bold text-center mb-8 pb-2">
            Sample Posts
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {[...Array(14).keys()].map((n) => (
              <div
                key={n}
                className={'relative w-full h-72 aspect-square group'}
              >
                <Image
                  fill
                  src={`/ads/ad (${n + 1}).png`}
                  alt=""
                  quality={50}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dgytBwACwgFK5PrQiQAAAABJRU5ErkJggg=="
                  className="object-contain duration-200 group-hover:scale-110 rounded-sm"
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
