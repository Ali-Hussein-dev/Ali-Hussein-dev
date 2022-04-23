import * as React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

const linksList = ['Home', 'Projects', 'Blog']
interface StyledLinkProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string
}
const StyledLink: React.FC<StyledLinkProps> = ({ label, ...rest }) => (
  <button
    type="button"
    className="px-3 py-1 mb-6 font-semibold rounded hover:bg-zinc-900 hover:cursor-pointer sm:mb-0 active:translate-y-1"
    {...rest}
  >
    <Link href={`/${label === 'Home' ? '' : label}`}>
      <a>{label}</a>
    </Link>
  </button>
)
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()
  return (
    <header
      className={`${isOpen ? 'absolute h-screen z-10' : ''} ${
        router.asPath === '/' ? 'lg:bg-zinc-800/10 backdrop-blur-sm' : ''
      } sm:relative w-full bg-zinc-700 flex justify-end sm:justify-center items-start sm:items-center py-3`}
    >
      {/* -------------------------------------------------------------menu row for desktop */}
      <div className="justify-center gap-x-10 hidden w-full text-xl font-semibold sm:flex md:text-2xl max-w-[880px] ">
        {linksList.map((link) => (
          <span key={link}>
            <StyledLink label={link} />
          </span>
        ))}
      </div>
      {/* -------------------------------------------------------------menu column for mobile devices */}
      <div
        className={`${
          isOpen ? 'relative' : 'hidden'
        } sm:hidden flex flex-col gap-y-4 mx-auto my-auto items-center text-zinc-200 text-3xl font-semibold leading-relaxed `}
      >
        {linksList.map((link) => (
          <StyledLink
            key={link}
            label={link}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </div>
      {/* -------------------------------------------------------------toggle button */}
      <a
        aria-label="toggle"
        className="px-2 py-2 mr-3 rounded-sm text-zinc-100 sm:hidden active:scale-75 focus:bg-trueGray-200 hover:bg-trueGray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size="30" /> : <FaBars size="30" />}
      </a>
    </header>
  )
}
