/* eslint-disable @next/next/no-img-element */
import { Text } from '@mantine/core'
import blogs from '../../db/blogs.json'
// import { BiCalendar } from 'react-icons/bi'
import { Metadata } from 'next'
import { Title } from '@/components/Title'
import { BlueTopGradient } from '@/components/blue-top-gradient/blue-top-gradient'

export const metadata: Metadata = {
  title: 'Blog Page',
  description:
    'Blog about Nextjs, Reactjs, Tailwindcss, Typescript, AI and more',
}
// https://tomaslau.com/
//=======================
const Blog: React.FC = () => (
  <div className="w-full relative">
    <BlueTopGradient />
    <div id="Blog" className="layout pt-8 animate-in">
      <div className="w-full">
        <Title title="Last Articles" />
        <div className="max-auto">
          {blogs.map((o, i) => (
            <div
              key={i}
              className="border-b pb-2 border-zinc-900 md:max-w-[90%]"
            >
              <a
                href={o.url}
                target="_blank"
                rel="noreferrer"
                className="flex pb-2 pt-4 rounded-sm hover:bg-zinc-400/10  group px-1"
              >
                <div className="w-full">
                  <div>
                    <h2 className="w-10/12 text-xl font-bold text-gray-400 mb-2">
                      {o.title}
                    </h2>
                    <Text
                      lineClamp={2}
                      className="pr-4 !text-zinc-500 md:w-11/12"
                    >
                      {o.description}
                    </Text>
                    {/* <span className="flex items-center text-base tracking-tight text-theme-secondary gap-x-2">
                    <BiCalendar /> {o.pub}
                  </span> */}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)
export default Blog
