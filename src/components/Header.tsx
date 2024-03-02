'use client'
import * as React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useScroll } from 'framer-motion'
import clsx from 'clsx'
import Image from 'next/image'

const linksList = ['Home', 'Blog', 'Design', 'About']
interface StyledLinkProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string
}
const StyledLink: React.FC<StyledLinkProps> = ({ label, ...rest }) => (
  <Link href={`/${label === 'Home' ? '' : label}`} className="w-full">
    <button
      type="button"
      className="px-3 py-1 mb-2 font-bold rounded-lg hover:bg-zinc-200 hover:text-zinc-800 hover:cursor-pointer sm:mb-0 active:translate-y-1 w-full border border-zinc-500 sm:border-none shadow sm:shadow-none duration-200"
      {...rest}
    >
      {label}
    </button>
  </Link>
)
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const ref = React.useRef<HTMLHeadingElement>()
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useScroll()
  React.useEffect(
    () => scrollY.on('change', () => setY(scrollY.get())),
    [scrollY]
  )

  return (
    <div className="relative w-full h-14">
      <header
        ref={() => ref}
        className={clsx(
          'w-full flex justify-between sm:justify-center items-center sm:items-center fixed z-10 px-3',
          y > height
            ? 'bg-zinc-900/70 sm:bg-transparent duration-200 shadow-lg backdrop-blur-lg'
            : 'bg-transparent',
          isOpen
            ? 'fixed h-screen z-10 bg-zinc-900/70 backdrop-blur-lg'
            : 'h-14'
        )}
      >
        {!isOpen && (
          <Link href="/" className="sm:hidden">
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              quality={70}
              priority
            />
          </Link>
        )}
        {/* -------------------------------------------------------------menu row for desktop */}
        <div
          className={clsx(
            'hidden sm:block w-full text-xl font-semibold max-w-5xl py-2 rounded-3xl',
            y > height
              ? 'bg-zinc-900/70 duration-200 shadow-lg sm:backdrop-blur-lg top-2 relative'
              : 'bg-transparent'
          )}
        >
          <div className="md:px-8 px-2 justify-between flex sm:flex mx-auto">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={40}
                height={40}
                quality={70}
                priority
              />
            </Link>
            <div className="flex-row-start gap-3">
              {linksList.map((link) => (
                <span key={link}>
                  <StyledLink label={link} />
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------------menu column for mobile devices */}
        <div
          className={`${
            isOpen ? 'relative pl-8' : 'hidden'
          } sm:hidden flex flex-col gap-y-4 my-auto items-center text-3xl font-bold leading-relaxed w-full`}
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
          className="self-start p-2 mt-2 text-gray-200 rounded-lg sm:mt-0 sm:hidden active:scale-110 focus:outline-none border border-zinc-800 bg-zinc-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size="24" /> : <FaBars size="24" />}
        </button>
      </header>
    </div>
  )
}
