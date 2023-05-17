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
    <div className="flex flex-col mx-auto gap-6 sm:flex-row">
      {data.map((obj, i) => (
        <BorderGradientContainer key={i}>
          <div className="flex flex-col gap-y-2 ">
            <p className="">{obj.text}</p>
            <span className="text-base italic">{obj.who}</span>
          </div>
        </BorderGradientContainer>
      ))}
    </div>
  )
}
