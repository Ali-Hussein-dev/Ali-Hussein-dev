import { FiExternalLink } from 'react-icons/fi'
import { Divider } from '@chakra-ui/react'
import Head from 'next/head'
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
    url:
      'https://ali-blog.hashnode.dev/your-guide-for-choosing-the-best-fit-npm-package',
    pub: 'Jan 14, 2021',
    imgSrc:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1610654449210/rXTF_bVBp.jpeg',
  },
  {
    title: 'How to implement an Accordion with React in less than 5 mins',
    url:
      'https://ali-blog.hashnode.dev/how-to-implement-an-accordion-with-react-in-less-than-5-mins',
    pub: 'Dec 9, 2020',
    imgSrc:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1607477311816/bGSOK0mWB.jpeg',
  },
]
const Blog: React.FC = () => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="grid w-full min-h-screen px-2 place-items-center" id="Blog">
      <Head>
        <title>Projects</title>
      </Head>
      <div className="py-4 text-xl md:w-9/12 lg:w-7/12">
        <h1 className="pb-1 mb-4 text-lg font-bold text-teal-500 border-b-4 border-teal-400 ">
          BLOG
        </h1>
        {blogs.map((o, i) => (
          <div key={i} className="mb-3">
            <div className="mb-3">
              {/* <Image
              src={o.imgSrc}
              borderRadius="lg"
              alt={o.title}
              // fallback={<Skeleton height="330px" />}
              /> */}
            </div>
            <a
              href={o.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-2 hover:bg-blueGray-50"
            >
              <div className="flex justify-between w-full gap-x-1">
                <div>
                  <h2 className="text-lg text-blue-400">{o.title}</h2>
                  <span className="text-blueGray-400">{o.pub} </span>
                </div>
                <span className="pt-1">
                  <FiExternalLink className=" text-blueGray-500" />
                </span>
              </div>
            </a>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Blog
