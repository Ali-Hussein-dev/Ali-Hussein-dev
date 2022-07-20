/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Heading } from '@chakra-ui/react'
//=======================
const blogs = [
  {
    title: 'Data Fetching Cheatsheet (Nextjs)',
    url: 'https://ali-blog.hashnode.dev/data-fetching-cheatsheet-nextjs',
    pub: 'Jul 20, 2022',
    imgSrc:
      'https://ali-blog.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658176122899%2FDYQ9_OJJ5.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75',
  },
  {
    title: 'Top Uncommon Productivity Tools',
    url: 'https://ali-blog.hashnode.dev/top-uncommon-productivity-tools',
    pub: 'Jan 18, 2021',
    imgSrc:
      'https://ali-blog.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FKE0nC8-58MQ%2Fupload%2Fv1658338165689%2FZQtAdEfa1.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75',
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
    className="grid items-start justify-center min-h-screen px-1 py-6 mx-auto lg:w-7/12"
  >
    <Head>
      <title>Blog</title>
    </Head>
    <div className="w-full mx-auto bg-white/20 rounded-2xl backdrop-blur-lg">
      <div className="w-full px-2 py-6 sm:px-4 ">
        <Heading
          as="h1"
          className="pb-1 mb-3 font-bold border-b text-primary-500 border-primary-400"
        >
          Last Articles
        </Heading>
        <div className="space-y-4">
          {blogs.map((o, i) => (
            <a
              href={o.url}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="flex flex-col pb-2 overflow-hidden lg:pb-0 rounded-2xl hover:bg-slate-400/20 lg:row-between lg:flex-row"
            >
              <div className="order-2 w-full px-2 lg:w-8/12">
                <Heading
                  as="h2"
                  size="md"
                  className="text-lg font-semibold text-gray-100 md:text-xl"
                >
                  {o.title}
                </Heading>
                <span className="text-base italic tracking-tight text-primary-100">
                  {o.pub}
                </span>
              </div>
              <div className="order-1 mb-2 lg:w-4/12 lg:order-2 lg:mb-0 ">
                <img
                  src={o.imgSrc}
                  className="lg:aspect-[4.4/3] lg:rounded-2xl object-cover"
                  alt="blog"
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
