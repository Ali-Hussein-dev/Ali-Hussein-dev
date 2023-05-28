import { BorderGradientContainer } from './border-gradient-container'

const data = [
  {
    text: 'Ich find es “Sau” interessant und man merk unheimlich viel Zeit und auch Bedanken rein gesetzt…',
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
    <section>
      <h2 className="mb-2 text-2xl font-extrabold text-left lg:text-3xl text-slate-200">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.map((obj, i) => (
          <BorderGradientContainer key={i}>
            <div className="flex flex-col gap-y-2 text-zinc-400">
              <p>{obj.text}</p>
              <span className="text-base italic">{obj.who}</span>
            </div>
          </BorderGradientContainer>
        ))}
      </div>
    </section>
  )
}
