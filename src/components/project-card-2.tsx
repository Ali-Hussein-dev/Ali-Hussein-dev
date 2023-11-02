import Image from 'next/image'
import { CiCalendarDate } from 'react-icons/ci'

//=======================
export const ProjectCard: React.FC<{
  name: string
  href: string
  stack: string
  description: string
  imgSrc?: string
  date: string
}> = ({ imgSrc = '', name, href, description, stack, date }) => (
  <div className="overflow-hidden rounded z-[2] w-full flex-col-start border-zinc-800 border">
    <div className="relative aspect-[15/12] w-full">
      <Image
        fill
        src={imgSrc as string}
        alt="project image"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dgytBwACwgFK5PrQiQAAAABJRU5ErkJggg=="
        className="object-bottom md:cover w-full h-full md:scale-95 md:scale-y-90 hover:scale-100 duration-500 rounded-t md:rounded brightness-90 hover:brightness-100 hover:rounded-b-none"
      />
    </div>
    <div className="flex flex-col justify-between px-3 py-3 bg-gradient-to-t from-zinc-800/70 to-black w-full h-[70%]">
      <div className="pb-1 sm:pb-0">
        <h3 className="mb-1 font-bold text-base uppercase text-zinc-200">
          {name}
        </h3>
        <p className="text-zinc-400 text-base">{description}</p>
        <div className="flex-row-start flex-wrap gap-1 pt-5">
          {stack.split(' ').map((s) => (
            <span
              key={s}
              className="text-sm text-zinc-100 bg-yellow-600 rounded-sm px-2 py-[2px]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      {/* //-----------------------------------------------BOTTOM */}
      <div className="flex-row-between flex-wrap pt-2 border-t-[1px] border-zinc-500">
        <div className="flex-row-start gap-1">
          <CiCalendarDate />
          <span className="text-xs">{date}</span>
        </div>
        <Link href={href}>
          <span>Visit</span>
        </Link>
      </div>
      {/* <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500/80 to-transparent" /> */}
    </div>
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
