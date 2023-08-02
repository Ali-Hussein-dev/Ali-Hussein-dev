import { GridBG, Hero } from '@/components/Hero'
import { Toolbox } from '@/components/Toolbox'
import { Workflow } from '@/components/Workflow'

export default function Page() {
  return (
    <>
      <GridBG />
      <div id="Home" className=" px-4 lg:px-0 z-20">
        <div className="max-w-4xl mx-auto w-full pb-8 space-y-8">
          <Hero />
          <div className="max-w-4xl mx-auto pb-10">
            {/* <AiProviders /> */}
            <Workflow />
            <Toolbox />
          </div>
        </div>
      </div>
    </>
  )
}
