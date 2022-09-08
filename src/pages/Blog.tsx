/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Text } from '@mantine/core'
//=======================
const blogs = [
  {
    title: 'Data Fetching Cheatsheet (Nextjs)',
    url: 'https://ali-blog.hashnode.dev/data-fetching-cheatsheet-nextjs',
    pub: 'Jul 20, 2022',
    imgSrc:
      'https://ali-blog.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658176122899%2FDYQ9_OJJ5.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75',
    description:
      'When you want to fetch data in your Nextjs app and you are not sure when to use what. It depends mainly on where you want to render your app and on some other use cases.',
  },
  {
    title: 'The confusing parts of TypeScript',
    url: 'https://ali-blog.hashnode.dev/the-confusing-parts-of-typescript',
    pub: 'Mar 18, 2021',
    imgSrc:
      'https://ali-blog.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1616066397018%2FDl-Gj8kX5.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75',
    description:
      'Learning TS and having a layer of protection to catch type-based errors was one of the biggest motivations to adopt TS. This an awesome tool to have in your pocket.',
  },
  {
    title: 'Top Uncommon Productivity Tools',
    url: 'https://ali-blog.hashnode.dev/top-uncommon-productivity-tools',
    pub: 'Jan 18, 2021',
    imgSrc:
      'https://ali-blog.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FKE0nC8-58MQ%2Fupload%2Fv1658338165689%2FZQtAdEfa1.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75',
    description:
      'There are many tools and tricks to be productive that reduce keystrokes and switching between open windows/applications. Here are some that are so powerful but uncommon.',
  },
  {
    title: 'Your Guide for choosing the best-fit NPM package',
    url: 'https://ali-blog.hashnode.dev/your-guide-for-choosing-the-best-fit-npm-package',
    pub: 'Jan 14, 2021',
    imgSrc:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1610654449210/rXTF_bVBp.jpeg',
    description:
      'It is easy to choose when a thing is good and the other is bad, but what to do when both are good! Pros and cons are the answer. Choosing an external 3rd party library takes time, obviously, it is a crucial process. There are many dependencies that do the same thing however nuances make them totally different with a big or little impact on the project. ',
  },
  {
    title: 'How to implement an Accordion with React in less than 5 mins',
    url: 'https://ali-blog.hashnode.dev/how-to-implement-an-accordion-with-react-in-less-than-5-mins',
    pub: 'Dec 9, 2020',
    imgSrc:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1607477311816/bGSOK0mWB.jpeg',
    description:
      'There are two versions of accordion I know, one is too easy to implement because multiple cards could be open at a time, and the second version only one card is open at a time or no one open at all. ',
  },
]
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
                  className="lg:aspect-[4.4/3] lg:rounded-xl lg:group-hover:rounded-l-none object-cover"
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
