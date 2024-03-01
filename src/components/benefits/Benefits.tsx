import * as React from 'react'
import css from './benefits.module.css'
import { cn } from 'src/utils/cn'
import Image from 'next/image'

const content = [
  {
    title: 'Personalized Attention',
    description:
      'Direct communication and dedicated support throughout the project, ensuring your vision is understood and implemented effectively.',
  },
  {
    title: 'Responsive Design',
    description:
      'Creation of websites optimized for all devices, providing a seamless user experience.',
  },
  {
    title: 'Post-Launch Support',
    description:
      'Continued assistance with updates, and maintenance, ensuring your website remains functional and secure.',
  },
  {
    title: 'Cost Effectiveness',
    description:
      'Affordable rates without sacrificing quality, offering competitive pricing compared to larger agencies.',
  },
]

type CardProps = {
  i: number
  title: string
  description: string
}

const sharedClasses = 'p-4'
/* White Card */
const Card_03 = ({ i, title, description }: CardProps) => {
  return (
    <div
      className={cn(
        css.card1,
        sharedClasses,
        ' bg-theme-secondary text-zinc-800',
        (i == 0 || i == 3) && 'md:col-span-3'
      )}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between items-center justify-center">
        <div className="max-w-sm order-last sm:-order-1">
          <h3 className="font-bold text-2xl tracking-tight mb-1 text-center sm:text-left">
            {title}
          </h3>
          <p className="font-light text-center sm:text-left">{description}</p>
        </div>
        <Image
          src={i == 0 ? '/document.svg' : '/wallet.svg'}
          width={170}
          height={170}
          alt="image"
          quality={70}
        />
      </div>
    </div>
  )
}

/* Black Card */
const Card_12 = ({ i, title, description }: CardProps) => {
  return (
    <div
      className={cn(
        css.card2,
        sharedClasses,
        ' bg-zinc-950',
        i == 2 && 'order-last sm:order-none'
      )}
    >
      <h3 className="font-bold text-2xl tracking-tight mb-1">{title}</h3>
      <p className="font-light text-base">{description}</p>
    </div>
  )
}

//======================================
export const Benefits = () => {
  return (
    <div className="pb-5 max-w-[54rem] mx-auto">
      <div className="mb-4 ">
        <h2 className="font-bold text-3xl text-theme-secondary text-center">
          <span className="text-theme-primary">Benefits</span> <br />
          Perks that you will love
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-5 md:gap-6 grid-cols-1">
        <Card_03
          i={0}
          title={content[0].title}
          description={content[0].description}
        />
        <Card_12
          i={1}
          title={content[1].title}
          description={content[1].description}
        />
        <Card_12
          i={2}
          title={content[2].title}
          description={content[2].description}
        />
        <Card_03
          i={3}
          title={content[3].title}
          description={content[3].description}
        />
      </div>
    </div>
  )
}
