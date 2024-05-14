import * as React from 'react'

type AnchorButtonProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLElement>

export function AnchorButton({ children, ...rest }: AnchorButtonProps) {
  return (
    <div className="w-full h-full bg-zinc-100 mx-auto max-w-fit">
      <a
        className="primary-btn text-lime-300 block mx-auto w-fit rounded-none hover-effect-1 border-[0.5px] border-zinc-800 z-10 no-underline"
        {...rest}
      >
        {children}
      </a>
    </div>
  )
}
