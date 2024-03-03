export const Title = ({ title }: { title: string }) => {
  return (
    <div className="mb-4">
      <h1 className="text-xl text-zinc-400 uppercase font-indie-flower">
        {title}
      </h1>
      <div className="h-[1px] bg-gradient-to-r from-zinc-300 via-zinc-600/10 to-transparent" />
    </div>
  )
}
