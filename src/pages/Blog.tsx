/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Text } from '@mantine/core'
import * as blogs from '../../db/blogs.json'

//=======================
const Blog: React.FC = () => (
  <div id="Blog" className="layout">
    <Head>
      <title>Blog</title>
    </Head>
    <div className="container-white blur-light">
      <div className="w-full">
        <h1 className="pb-1 mb-2 border-b h1 text-primary-500 border-primary-400">
          Last Articles
        </h1>
        <div className="space-y-4">
          {blogs.map((o, i) => (
            <a
              href={o.url}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="flex flex-col pb-2 overflow-hidden lg:pb-0 rounded-xl hover:bg-slate-100/10 lg:row-between lg:flex-row group"
            >
              <div className="order-2 w-full lg:self-start lg:pr-4 lg:w-8/12 lg:pt-4">
                <div className="pl-2">
                  <h2 className="text-lg font-semibold text-gray-800 uppercase md:text-xl">
                    {o.title}
                  </h2>
                  <Text
                    lineClamp={3}
                    className="italic text-slate-800"
                    color="dark"
                  >
                    {o.description}
                  </Text>
                  <span className="text-base italic tracking-tight text-gray-800">
                    {o.pub}
                  </span>
                </div>
              </div>
              <div className="order-1 mb-2 lg:w-4/12 lg:order-2 lg:mb-0 ">
                <img
                  src={o.imgSrc}
                  className="lg:aspect-[4/3] lg:rounded-xl lg:group-hover:rounded-l-none object-cover"
                  alt="blog image"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
)
export default Blog
