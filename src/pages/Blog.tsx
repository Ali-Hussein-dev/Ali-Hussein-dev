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
    <div className="max-w-xl container-white blur-dark">
      <div className="w-full">
        <h1 className="pb-1 mb-2 border-b h1 text-primary-500 border-primary-400">
          Last Articles
        </h1>
        <div className="space-y-5 max-auto">
          {blogs.map((o, i) => (
            <a
              href={o.url}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="flex flex-col py-2 rounded-sm lg:pb-0 hover:bg-slate-800 lg:row-between lg:flex-row group"
            >
              <div className="order-2 w-full lg:self-start ">
                <div className="pl-2 ">
                  <h2 className="w-10/12 text-xl font-bold text-gray-100 uppercase">
                    {o.title}
                  </h2>
                  <Text lineClamp={1} className="pr-4 italic text-slate-100">
                    {o.description}
                  </Text>
                  <span className="flex items-center text-base italic tracking-tight text-gray-400 gap-x-2">
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
