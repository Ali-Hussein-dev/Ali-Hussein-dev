import Image from 'next/image'
import { CiCalendarDate } from 'react-icons/ci'
import { FaGooglePlay } from 'react-icons/fa'
//=======================
export const ProjectCard: React.FC<{
  name: string
  href: string
  stack: string
  description: string
  imgSrc?: string
  date: string
  playstore?: string
}> = ({
  imgSrc = '',
  name,
  href,
  description,
  stack,
  date,
  playstore = null,
}) => (
  <div className="overflow-hidden rounded z-[2] w-full flex-col-start border-zinc-800/70 border">
    <div className="w-full group p-3 pt-4 bg-black">
      <div
        className="border-[1px] h-full border-zinc-800 relative overflow-hidden aspect-[15/11] rounded-lg"
        style={{
          backgroundImage:
            'radial-gradient(300px 170px at center, hsl(0,0%,100%,0.08) 0%, hsl(0,0%,0%) 90%)',
        }}
      >
        <div className="h-full group-hover:opacity-0 duration-300">
          <p className="uppercase h-full center font-bold text-zinc-300  text-center max-w-[80%] mx-auto">
            {name}
          </p>
        </div>
        <Image
          width={400}
          height={300}
          // sizes={'(max-width: 468px) 100vw'}
          quality={70}
          src={imgSrc as string}
          alt="project image"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          className="object-cover w-full duration-500 brightness-110 transition-transform translate-y-[220px] group-hover:translate-y-0 absolute inset-0 h-full opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
    <div className="flex flex-col justify-between px-3 pb-1 bg-gradient-to-t from-zinc-800/70 to-black w-full h-[70%]">
      <div className="pb-1 sm:pb-0">
        {/* <h3 className="mb-1 font-bold text-base uppercase text-zinc-200">
          {name}
        </h3> */}
        <p className="text-zinc-400 text-base">{description}</p>
        <div className="flex-row-start flex-wrap gap-1 pt-5 pb-3">
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
        <div className="flex-row-end gap-1">
          {!!playstore && (
            <Link href={playstore}>
              <FaGooglePlay size="17" className="text-white" />
            </Link>
          )}
          <Link href={href}>
            <span>Visit</span>
          </Link>
        </div>
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
    className="flex-row-center px-4 text-lg rounded hover:underline h-9 text-lime-300 font-medium underline-offset-1 hover:bg-zinc-100/10 bg-zinc-900 z-[5]"
  >
    {children}
  </a>
)
