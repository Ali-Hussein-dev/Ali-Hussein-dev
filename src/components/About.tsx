const content = {
  p1: 'I am a self-taught developer deeply passionate about creating exceptional user experiences through intuitive design. With a relentless drive to merge creativity with functionality, my journey in the realm of UX/UI has been both challenging and rewarding.',
  p2: "I'm currently seeking opportunities to work with a team that shares my passion for creating meaningful digital experiences.",
}
//======================================
export const About = () => {
  return (
    <div className="w-full from-zinc-950 bg-gradient-to-t to-zinc-950/30 mx-auto">
      <div className="[background-image:url(/bottom-grid.svg)] bg-no-repeat w-full bg-contain bg-bottom min-h-[40rem] center">
        <div className="max-w-5xl mx-auto flex-row-start">
          {/* // TEXT SECTION */}
          <div className="md:p-10 p-2 w-full font-indie-flower">
            <h2 className="title font-indie-flower">About Me</h2>
            <div className="max-w-2xl text-zinc-300  md:text-xl space-y-4 pt-3">
              <p className="leading-9 font-indie-flower">{content.p1}</p>
              <p className="leading-9 font-indie-flower">{content.p2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
