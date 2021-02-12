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
    cn: 'text-blueGray-500',
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
const About: React.FC = () => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <section id="About" className="grid px-3 pt-6 place-items-center ">
      <Head>
        <title>About</title>
      </Head>
      <div className="py-4 text-xl md:w-9/12 lg:w-7/12">
        <h1 className="mb-3 text-lg font-bold text-teal-500">About</h1>
        <h2 className="font-semibold ">A UX-driven frontend developer</h2>
        <p className="pb-2 mb-4 leading-8 border-b border-gray-200 text-blueGray-500">
          I build web applications with a lot of passion for clean UI, clean
          code, intuitive UX and great performance. They are high standards, to
          stay aligned with them I follow best practices and try out new things.
          I came from a business background and live in Germany since 2015.
          <Link href={links[2].href} cn={links[2].cn}>
            Feel free to reach out
          </Link>
        </p>
        <h2 className="font-semibold ">My Stack</h2>
        <p className="pb-2 mb-4 leading-8 border-b border-gray-200">
          TypeScript, Javascript, React, Next.js, CSS, Html, Jest, Tailwindcss,
          Git, xState <br /> Familiar with <br />
          Nodejs and MongoDB
        </p>
        <div className="flex py-3 border-b border-gray-300">
          {links.map((o, i) => (
            <span key={i} className="p-1 ml-3 rounded-xl hover:bg-blueGray-100">
              <Link href={o.href} cn={o.cn} IconName={o.IconName} />
            </span>
          ))}
          <span className="p-1 ml-3 rounded-xl hover:bg-blueGray-50">
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
                ></path>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
export default About
