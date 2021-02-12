import * as React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

const linksList = ['Home', 'About', 'Projects', 'Blog']
interface StyledLinkProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string
}
const StyledLink: React.FC<StyledLinkProps> = ({ label, ...rest }) => (
  <button
    className="px-3 mb-6 font-semibold hover:text-blue-500 hover:cursor-pointer active:text-blue-500 sm:mb-0"
    {...rest}
  >
    <Link href={`/${label === 'Home' ? '' : label}`}>
      <a>{label}</a>
    </Link>
  </button>
)
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header
      className={`${
        isOpen ? 'absolute h-screen bg-white z-20' : ''
      } sm:relative bg-white w-full flex justify-end sm:justify-center items-start sm:items-center border-solid border-b border-blueGray-300 brand py-3`}
    >
      {/* -------------------------------------------------------------menu row for desktop */}
      <div className="items-center hidden text-xl font-semibold divide-x divide-gray-300 sm:flex sm:flex-row md:text-2xl divide-solid">
        {linksList.map((link) => (
          <StyledLink key={link} label={link} />
        ))}
      </div>
      {/* -------------------------------------------------------------menu column for mobile devices */}
      <div
        className={`${
          isOpen ? 'relative' : 'hidden'
        } sm:hidden flex flex-col mx-auto my-auto items-center text-blueGray-700 text-3xl font-semibold leading-relaxed`}
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
        aria-label="toggle"
        className="px-2 py-2 mr-3 rounded-sm text-blueGray-600 sm:hidden active:scale-75 focus:bg-blueGray-200 hover:bg-blueGray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size="30" /> : <FaBars size="30" />}
      </button>
    </header>
  )
}
