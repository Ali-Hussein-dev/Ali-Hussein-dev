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
        <div
          key={i}
          className="flex flex-col min-h-full px-4 pt-6 pb-4 border border-b-2 border-l-2 border-gray-600 gap-y-2 rounded-xl"
        >
          <p className="">{obj.text}</p>
          <span className="text-base italic">{obj.who}</span>
        </div>
      ))}
    </div>
  )
}
