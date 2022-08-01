import { FaLinkedin, FaTwitter, FaGithub, FaRegEnvelope } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

const links = [
  {
    href: 'https://twitter.com/AliHussein_20',
    IconName: FaTwitter,
    cn: 'text-gray-400 ',
  },
  {
    href: 'https://github.com/Ali-Hussein-dev',
    IconName: FaGithub,
    cn: 'text-gray-400 ',
  },
  {
    href: 'https://www.linkedin.com/in/ali-hussein-4292a6156/',
    IconName: FaLinkedin,
    cn: 'text-gray-400 ',
  },
  {
    href: 'mailto:ali.hussein.pre@gmail.com',
    IconName: FaRegEnvelope,
    cn: 'text-gray-400 ',
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
      {IconName && <IconName size="25" />}
      {children && <span>{children}</span>}
      <span className="sr-only">social network link</span>
    </a>
  </div>
)
//=======================
const Footer: React.FC = () => (
  <footer className="bottom-0 w-full py-1 bg-slate-800/80">
    <div className="flex flex-col items-center w-full px-2 mx-auto lg:flex-row lg:justify-between lg:w-8/12 ">
      <span className="font-light text-gray-100">
        @{new Date().getFullYear()} Ali Hussein
      </span>
      <div className="flex flex-col items-center py-1 sm:justify-between sm:flex-row gap-y-3">
        <div className="flex justify-center w-full gap-x-1 sm:justify-start">
          {links.map((o, i) => (
            <span key={i} className="p-1 ml-1 rounded-xl">
              <Link href={o.href} cn={o.cn} IconName={o.IconName} />
            </span>
          ))}
          <span className="p-1 ml-2 rounded-xl hover:bg-trueGray-50">
            <Link href={'https://hashnode.com/@Ali-2021'} cn="">
              <svg
                className="w-6 text-gray-400 fill-current "
                viewBox="0 0 118 118"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z"
                />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </div>
  </footer>
)
export default Footer
