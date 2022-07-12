import { Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { FaTwitter, FaGithub, FaRegEnvelope } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
import { IoDocumentText } from 'react-icons/io5'

const links = [
  {
    href: 'https://twitter.com/AliHussein_20',
    IconName: FaTwitter,
    cn: 'text-blue-500 ',
  },
  {
    href: 'https://github.com/Ali-Hussein-dev',
    IconName: FaGithub,
    cn: 'text-gray-400 ',
  },
  {
    href: 'mailto:ali.hussein.pre@gmail.com',
    IconName: FaRegEnvelope,
    cn: 'text-trueGray-500',
  },
]
interface LinkProp {
  href: string
  cn: string
  IconName?: IconType
  children?: any
}
const Link: React.FC<LinkProp> = ({ href, IconName, cn, children }) => (
  <div>
    <a className={cn} href={href} target="_blank" rel="noreferrer">
      {IconName && <IconName size="30" />}
      {children && <span className="font-semibold">{children}</span>}
    </a>
  </div>
)
const DownloadCV = () => {
  const onClick = async () => {
    await fetch('/api/cv', {
      method: 'GET',
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Sorry, I could not find that file.')
        }
        return res.blob()
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.setAttribute('download', 'Ali_Hussein_cv.pdf')
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      })
  }
  return (
    <button
      onClick={onClick}
      type="submit"
      className="flex items-center justify-center w-full h-10 px-4 py-1 rounded-lg select-none gap-x-3 hover:bg-slate-800/40 bg-slate-800/20 active:translate-y-1 sm:max-w-[190px] sm:justify-start"
    >
      <IoDocumentText />
      <span>Download CV</span>
    </button>
  )
}
//=======================
const Index: React.FC = () => (
  <section
    id="Home"
    className="flex flex-col items-center justify-center min-h-screen px-1 py-8 md:px-3"
  >
    <Head>
      <title>About</title>
    </Head>
    <div className="px-3 py-8 mx-auto sm:px-6 md:w-full lg:w-7/12 bg-white/20 rounded-2xl backdrop-blur-lg">
      <Heading as="h2" size="lg" className="mb-2 text-3xl font-semibold">
        A UX-driven frontend developer
      </Heading>
      <Text className="pb-2 mb-6 border-b border-gray-500">
        I build web applications with a lot of passion for clean UI, clean code,
        intuitive UX and great performance. I came from a business background
        and live in Germany since 2015. Feel free to reach out, if you think I
        could fit in your team.
      </Text>
      <Heading as="h2" size="lg" className="mb-2 text-3xl font-semibold">
        Stack & Technologies
      </Heading>
      <div className="pb-2 mb-2 space-y-2 leading-8 border-b border-gray-500">
        <div>
          <Heading as="h3" size="md" className="text-gray-300">
            <span className="underline">Frontend Techs:</span>
            <span className="ml-1 italic text-gray-400">(Proficient)</span>
          </Heading>
          <p>
            Typescript, Javascript(ES6), React, Nextjs, RESTful API,
            Tailwindcss, Html5, CSS3, Jest, Chakra-UI, Uploadcare
          </p>
        </div>
        <div>
          <Heading as="h3" size="md" className="text-gray-300">
            <span className="underline">Backend Techs:</span>
            <span className="ml-1 italic text-gray-400">(Familiar)</span>
          </Heading>
          <p>Nodejs, Redis, FaunaDB</p>
        </div>
        <div>
          <Heading as="h3" size="md" className="text-gray-300 underline">
            Workflow Tools
          </Heading>
          <p>
            VScode, Git, GitHub, Eslint, Prettier, Nx workspaces, Figma, Notion,
            Lucidchart
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-1 sm:justify-between sm:flex-row gap-y-3">
        <div className="flex justify-center w-full gap-x-2 sm:justify-start">
          {links.map((o, i) => (
            <span key={i} className="p-1 ml-3 rounded-xl">
              <Link href={o.href} cn={o.cn} IconName={o.IconName} />
            </span>
          ))}
          <span className="p-1 ml-3 rounded-xl hover:bg-trueGray-50">
            <Link href={'https://hashnode.com/@Ali-2021'} cn="">
              <svg
                className="w-8 fill-current"
                viewBox="0 0 118 118"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z"
                  fill="#2962FF"
                />
              </svg>
            </Link>
          </span>
        </div>
        <DownloadCV />
      </div>
    </div>
  </section>
)
export default Index
