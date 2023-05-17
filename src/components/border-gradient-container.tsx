// source: https://buildui.com/recipes/gradient-border
export const BorderGradientContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div
      style={
        {
          '--dark-primary': '0 0 0',
          '--light-primary': '251 191 36',

          '--bg-color':
            'linear-gradient(rgb(var(--dark-primary)), rgb(var(--dark-primary)))',
          '--border-color': `linear-gradient(145deg,
            rgb(var(--light-primary)) 0%,
            rgb(var(--light-primary) / 0.3) 22.33%,
            rgb(var(--light-primary) / 0.14) 66.67%,
            rgb(var(--light-primary) / 0.1) 100%)
          `,
        } as React.CSSProperties
      }
      className=" w-full max-w-md rounded-xl border border-transparent p-6 pb-4
      [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      {children}{' '}
    </div>
  )
}
