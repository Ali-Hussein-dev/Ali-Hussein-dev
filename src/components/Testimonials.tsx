import { BorderGradientContainer } from './border-gradient-container'

const data = [
  {
    text: 'Ich finde es “Sau” interessant und man merkt, dass unheimlich viel Zeit und auch Gedanken hineingesteckt wurden...',
    who: 'Karrays und Barrays, Frankfurt am Main',
  },
  {
    text: 'Ich find es cool und viel einfacher als den normalen Taschenrechner. Man spart Zeit und admit macht man auch kein Rechenfehler mehr wenn man die Zahlen richtig eingibt',
    who: 'TRUDE, Hamburg',
  },
  // {
  //   text: "",
  //   who: 'Marco Technologies, US',
  // },
  // {
  //   text: 'Working with this web developer was a game-changer for our online presence. We are incredibly satisfied with their work and would highly recommend them to anyone in need of a talented web developer',
  //   who: 'Yield, US',
  // },
]
//======================================
export const Testimonials = () => {
  return (
    <section className="pb-4 mx-auto">
      <h2 className="mb-4 text-2xl font-extrabold text-slate-200">
        What clients says
      </h2>
      <div className="flex gap-3">
      {/* <div className="grid grid-cols-1 gap-3 md:grid-cols-3 "> */}
        {data.map((obj, i) => (
          <div key={i} className="z-[2]">
            <BorderGradientContainer>
              <div className={'flex flex-col gap-y-4 text-zinc-400'}>
                <p>{obj.text}</p>
                <span className="text-base italic border-t pt-1 border-yellow-900/20">
                  {obj.who}
                </span>
              </div>
            </BorderGradientContainer>
          </div>
        ))}
      </div>
    </section>
  )
}
