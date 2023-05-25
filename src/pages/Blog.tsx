/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Text } from '@mantine/core'
import blogs from '../../db/blogs.json'
import { BiCalendar } from 'react-icons/bi'

//=======================
const Blog: React.FC = () => (
  <div id="Blog" className="layout">
    <Head>
      <title>Blog</title>
    </Head>
    <div className="max-w-3xl container-white">
      <div className="w-full">
        <h1 className="pb-1 mb-4 border-b text-gray-200 border-gray-900 uppercase">
          Last Articles
        </h1>
        <div className="space-y-5 max-auto">
          {blogs.map((o, i) => (
            <a
              href={o.url}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="flex flex-col py-2 rounded-sm lg:pb-0 hover:bg-gray-100/10 lg:row-between lg:flex-row group"
            >
              <div className="order-2 w-full lg:self-start ">
                <div className="pl-2 ">
                  <h2 className="w-10/12 text-xl font-bold text-gray-100 uppercase">
                    {o.title}
                  </h2>
                  <Text
                    lineClamp={1}
                    color="none"
                    className="pr-4 italic text-zinc-400"
                  >
                    {o.description}
                  </Text>
                  <span className="flex items-center text-base italic tracking-tight text-zinc-500 gap-x-2">
                    <BiCalendar /> {o.pub}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
)
export default Blog
