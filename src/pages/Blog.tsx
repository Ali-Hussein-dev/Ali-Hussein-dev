import { FiExternalLink } from 'react-icons/fi'
import Head from 'next/head'
import { Heading } from '@chakra-ui/react'
//=======================
const blogs = [
  {
    title: 'Top Uncommon Productivity Tools',
    url: 'https://ali-blog.hashnode.dev/top-uncommon-productivity-tools',
    pub: 'Jan 18, 2021',
    imgSrc:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1608945373609/dpa2q1Bcf.webp',
  },
  {
    title: 'Your Guide for choosing the best-fit NPM package',
    url: 'https://ali-blog.hashnode.dev/your-guide-for-choosing-the-best-fit-npm-package',
    pub: 'Jan 14, 2021',
    imgSrc:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1610654449210/rXTF_bVBp.jpeg',
  },
  {
    title: 'How to implement an Accordion with React in less than 5 mins',
    url: 'https://ali-blog.hashnode.dev/how-to-implement-an-accordion-with-react-in-less-than-5-mins',
    pub: 'Dec 9, 2020',
    imgSrc:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1607477311816/bGSOK0mWB.jpeg',
  },
]
const Blog: React.FC = () => (
  <div
    id="Blog"
    className="grid items-start justify-center min-h-screen px-1 py-6 md:px-2"
  >
    <Head>
      <title>Blog</title>
    </Head>
    <div className="w-full py-4 mx-auto lg:w-10/12">
      <div className="w-full px-3 py-6 mx-auto sm:px-6 bg-white/20 rounded-2xl backdrop-blur-lg">
        <Heading
          as="h1"
          className="pb-1 mb-3 font-bold border-b text-cyan-500 border-cyan-400"
        >
          Last Articles
        </Heading>
        <div className="space-y-5">
          {blogs.map((o, i) => (
            <div key={i}>
              <a
                href={o.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-x-2 hover:bg-trueGray-50"
              >
                <div className="flex justify-between w-full gap-x-1">
                  <div>
                    <h2 className="text-lg text-gray-100">{o.title}</h2>
                    <span className="text-base italic text-gray-400">
                      {o.pub}{' '}
                    </span>
                  </div>
                  <span className="pt-1">
                    <FiExternalLink className="text-gray-400 " />
                  </span>
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
