import { StylizedImage } from './StylizedImage'
import { FaSquareXTwitter } from 'react-icons/fa6'

const content = {
  p1: 'I am a self-taught developer deeply passionate about creating exceptional user experiences through intuitive design. With a relentless drive to merge creativity with functionality, my journey in the realm of UX/UI has been both challenging and rewarding.',
  p2: "I'm currently seeking opportunities to work with a team that shares my passion for creating meaningful digital experiences.",
}
//======================================
export const About = () => {
  return (
    <div className="w-full from-zinc-950 bg-gradient-to-t to-zinc-950/30 mx-auto">
      <div className="[background-image:url(/bottom-grid.svg)] bg-no-repeat w-full bg-contain bg-bottom min-h-[40rem] center pb-6">
        <div
          className={
            'mx-auto flex md:justify-between md:items-center md:flex-row flex-col w-full max-w-6xl gap-4 md:px-4'
          }
        >
          {/* // TEXT SECTION */}
          <div className="p-4 w-full font-indie-flower order-last md:order-first">
            <h2 className="title font-indie-flower">About Me</h2>
            <div className="max-w-2xl text-zinc-300  md:text-xl space-y-2 pt-2">
              <p className="leading-9 font-indie-flower">{content.p1}</p>
              <p className="leading-9 font-indie-flower">{content.p2}</p>
            </div>
            <div>
              <a
                href="https://twitter.com/AliHussein_20"
                className="inline-block px-6 py-2 mt-4 text-white bg-zinc-900 hover:bg-zinc-800 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on <FaSquareXTwitter className="inline-block" />
              </a>
            </div>
          </div>
          <StylizedImage
            src="/laptop.jpg"
            sizes="(min-width: 1024px) 41rem, 31rem"
            className="justify-center lg:justify-end"
          />
        </div>
      </div>
    </div>
  )
}
