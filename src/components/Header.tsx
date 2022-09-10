import * as React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useScroll } from 'framer-motion'
import clsx from 'clsx'

const linksList = ['Home', 'Projects', 'Blog', 'About']
interface StyledLinkProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string
}
const StyledLink: React.FC<StyledLinkProps> = ({ label, ...rest }) => (
  <Link href={`/${label === 'Home' ? '' : label}`}>
    <a>
      <button
        type="button"
        className="px-3 py-1 mb-6 font-semibold rounded hover:bg-gray-100 hover:text-slate-800 hover:cursor-pointer sm:mb-0 active:translate-y-1"
        {...rest}
      >
        {label}
      </button>
    </a>
  </Link>
)
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const ref = React.useRef<HTMLHeadingElement>()
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useScroll()
  React.useEffect(() => scrollY.onChange(() => setY(scrollY.get())), [scrollY])

  return (
    <div className="relative h-14">
      <header
        ref={() => ref}
        className={clsx(
          'w-full flex justify-end  sm:justify-center items-center sm:items-center fixed top-0  z-10',
          y > height ? 'blur-dark shadow-lg' : 'bg-transparent',
          isOpen ? 'fixed h-screen z-10 blur-dark' : 'h-14'
        )}
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
          } sm:hidden flex flex-col gap-y-4 mx-auto my-auto items-center text-gray-200 text-3xl font-semibold leading-relaxed `}
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
        <button
          type="button"
          aria-label="toggle button"
          className="self-start px-2 py-2 mt-2 text-gray-100 rounded-sm sm:mt-0 sm:hidden active:scale-75 focus:bg-trueGray-200 hover:bg-trueGray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size="30" /> : <FaBars size="30" />}
        </button>
      </header>
    </div>
  )
}
