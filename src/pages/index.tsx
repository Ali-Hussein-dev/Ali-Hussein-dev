import Head from 'next/head'
import { FaTwitter, FaGithub, FaRegEnvelope } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
const links = [
  {
    href: 'https://twitter.com/AliHussein_20',
    IconName: FaTwitter,
    cn: 'text-blue-500 ',
  },
  {
    href: 'https://github.com/Ali-Hussein-dev',
    IconName: FaGithub,
    cn: 'text-gray-600 ',
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
//=======================
const Index: React.FC = () => (
  <section id="Home" className="grid min-h-screen px-2 place-items-center">
    <Head>
      <title>About</title>
    </Head>
    <div className="py-4 md:w-9/12 lg:w-7/12 ">
      <h2 className="mb-2 text-3xl font-semibold">
        A UX-driven frontend developer
      </h2>
      <p className="pb-2 mb-8 leading-8 border-b border-zinc-500">
        I build web applications with a lot of passion for clean UI, clean code,
        intuitive UX and great performance. I came from a business background
        and live in Germany since 2015. Feel free to reach out, I am looking
        currently for new challenges.
      </p>
      <h2 className="mb-2 text-3xl font-semibold">Stack & Technologies</h2>
      <div className="pb-2 mb-2 leading-8 border-b border-zinc-500">
        <h3 className="text-zinc-400">Proficient with</h3>
        <p>
          Typescript, Javascript(ES6), React, Nextjs, RESTful API, CSS3, Html5,
          Jest, Tailwindcss, Git, Chakra-UI, Figma
        </p>
        <h3 className="text-zinc-400">Familiar with</h3>
        <p>Nodejs and FaunaDB</p>
      </div>
      <div className="flex py-1">
        {links.map((o, i) => (
          <span key={i} className="p-1 ml-3 rounded-xl">
            <Link href={o.href} cn={o.cn} IconName={o.IconName} />
          </span>
        ))}
        <span className="p-1 ml-3 rounded-xl hover:bg-trueGray-50">
          <Link href={'https://hashnode.com/@Ali-2021'} cn="">
            <svg className="w-8 fill-current" viewBox="0 0 118 118" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z"
                fill="#2962FF"
              ></path>
            </svg>
          </Link>
        </span>
      </div>
    </div>
  </section>
)
export default Index
