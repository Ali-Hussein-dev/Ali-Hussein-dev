import { BorderGradientContainer } from './border-gradient-container'

const data = [
  {
    text: 'Ali has much understanding of generative AI and its applications. His insights on the development process were invaluable, and he shared his perspective on leveraging AI to create innovative solutions.',
    who: 'Upwork client, Switzerland',
  },
  {
    text: 'Ich finde es “Sau” interessant und man merkt, dass unheimlich viel Zeit und auch Gedanken hineingesteckt wurden...',
    who: 'Karrays und Barrays, Frankfurt am Main',
  },
  {
    text: 'Ich find es cool und viel einfacher als den normalen Taschenrechner. Man spart Zeit und admit macht man auch kein Rechenfehler mehr wenn man die Zahlen richtig eingibt',
    who: 'TRUDE, Hamburg',
  },
]
//======================================
export const Testimonials = () => {
  return (
    <section className="sm:masonry-cols-3 pb-6 space-y-3 sm:space-y-0">
      {data.map((obj, i) => (
        <BorderGradientContainer key={i}>
          <div className="flex flex-col gap-y-2 text-zinc-400 break-inside bottom-gradient relative after:h-10">
            <p>{obj.text}</p>
            <span className="text-base italic">{obj.who}</span>
          </div>
        </BorderGradientContainer>
      ))}
    </section>
  )
}
