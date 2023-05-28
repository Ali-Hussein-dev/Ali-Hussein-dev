const links = [
  {
    href: 'https://twitter.com/AliHussein_20',
    label: 'Twitter',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Ali-Hussein-dev',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ali-hussein-4292a6156/',
  },
  {
    label: 'Email',
    href: 'mailto:ali.hussein.pre@gmail.com',
  },
]

//=======================
const Footer: React.FC = () => (
  <footer className="bottom-0 w-full py-1 border-t border-zinc-800 max-w-[1024px]">
    <div className="flex flex-col items-center w-full px-2 mx-auto lg:flex-row lg:justify-center lg:w-8/12 ">
      <div className="flex flex-col items-center py-1 sm:justify-between sm:flex-row gap-y-3">
        <div className="flex justify-center w-full gap-x-1 sm:justify-start">
          {links.map((o, i) => (
            <span key={i} className="p-1 ml-1 rounded-xl">
              <a
                href={o.href}
                className="text-gray-300"
                target="_blank"
                rel="noreferrer"
              >
                {o.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
)
export default Footer
