export const Title = ({ title }: { title: string }) => {
  return (
    <div className="mb-4">
      <h1 className="pb-1 text-xl text-zinc-400  uppercase">{title}</h1>
      <div className="h-[1px] bg-gradient-to-r from-zinc-600 via-zinc-600/10 to-transparent" />
    </div>
  )
}
