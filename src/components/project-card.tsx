import Image from 'next/image'
import { CiCalendarDate } from 'react-icons/ci'

//=======================
export const ProjectCard: React.FC<{
  name: string
  href: string
  stack: string
  description: string
  // @deperated
  src?: string
  imgSrc?: string
  date: string
}> = ({ imgSrc = '', name, href, description, stack, date }) => (
  <div className="mb-6 sm:mb-8 space-y-2 overflow-hidden rounded-sm break-inside bg-black z-20 shadow">
    <div className="relative aspect-video hover:scale-110 duration-500">
      <Image
        fill
        src={imgSrc as string}
        alt="project image"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dgytBwACwgFK5PrQiQAAAABJRU5ErkJggg=="
      />
    </div>
    <div className="flex flex-col justify-between flex-grow px-2 pb-2 tracking-tight text-zinc-300">
      <div className="py-2">
        <h3 className="mb-1 font-bold text-base uppercase text-gray-200">
          {name}
        </h3>
        <p className="text-gray-400 text-base">{description}</p>
        <div className="flex-row-start flex-wrap gap-1 pt-6">
          {stack.split(' ').map((s) => (
            <span
              key={s}
              className="text-sm text-zinc-200 bg-yellow-500/30 rounded-sm px-2 py-[2px]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-row-between flex-wrap pt-2 border-t-[1px] border-zinc-800">
        <div className="flex-row-start gap-1">
          <CiCalendarDate />
          <span className="text-xs">{date}</span>
        </div>
        <Link href={href}>
          <span>Visit</span>
        </Link>
      </div>
    </div>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500/80 to-transparent" />
  </div>
)
const Link: React.FC<{ href: string; children: string | React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex-row-center px-4 text-lg rounded hover:underline h-9 text-slate-100 underline-offset-1 hover:bg-zinc-100/10 bg-zinc-900 z-[5]"
  >
    {children}
  </a>
)
