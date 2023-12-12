import Image from 'next/image'
import * as React from 'react'

const list = [
  { name: 'Anthropic', src: '/ai/logo_anthropic.svg' },
  { name: 'OpenAI', src: '/ai/logo_openai.svg' },
  { name: 'Replicate', src: '/ai/logo_replicate.svg' },
  { name: 'HuggineFace', src: '/ai/logo_huggingface.svg' },
  { name: 'Cohere', src: '/ai/logo_cohere.svg' },
]

//======================================
export const AiProviders = () => {
  return (
    <section className="layout pb-20">
      <h2 className="text-xl sm:text-3xl text-center font-extrabold mb-4">
        Empower Your Business
        <br className="sm:hidden" /> With AI
      </h2>
      <div className="mx-auto overflow-hidden md:max-w-4xl px-3">
        <div className="grid grid-cols-6 gap-4 w-full max-w-lg py-5 mx-auto md:max-w-xl lg:max-w-4xl">
          {list.map((o, i) => (
            <div
              key={i}
              className={`bg-zinc-950 border-[0.5px] border-b shadow shadow-yellow-800/10 border-zinc-700 rounded-3xl overflow-hidden p-4 grid place-items-center z-[2] h-40 ${
                i < 2 ? 'col-span-3' : 'col-span-2'
              }`}
            >
              <div className="flex-col-center gap-2">
                <Image src={o.src} width={40} height={40} alt={o.name} />
                <span className="font-semibold text-white">{o.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
