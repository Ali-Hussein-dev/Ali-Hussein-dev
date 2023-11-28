'use client'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { BorderGradientContainer } from './border-gradient-container'
import { clsx } from '@mantine/core'
const data = [
  {
    text: 'Hey man , really cool project with the GPT clone. What are your plans with the source code would you ever plan on sharing it?...',
    who: 'Discord user',
  },
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
  {
    text: '...Once again your app made an impression on me. User experience is just sky high. I am definitely going to take notes from the code 😚',
    who: 'Discord user',
  },
  {
    text: 'Nice Masha Allah, clean ui',
    who: 'Discord user',
  },
]
//======================================
export const Testimonials = () => {
  return (
    <>
      <h2 className="title">Testimonials</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-zinc-950">
        {data.map((obj, i) => (
          <BorderGradientContainer key={i}>
            <div
              className={clsx(
                'flex flex-col gap-y-2 text-zinc-300 bottom-gradient relative after:h-10 pb-1 break-inside'
              )}
            >
              <p>
                <BiSolidQuoteLeft className="inline-block mr-1 pb-1 text-lime-300" />{' '}
                {obj.text}
              </p>
              <span className="text-base italic">{obj.who}</span>
            </div>
          </BorderGradientContainer>
        ))}
      </section>
    </>
  )
}
