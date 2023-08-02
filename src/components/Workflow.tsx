import Image from 'next/image'

export const Workflow = () => {
  const blurDataURL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dgytBwACwgFK5PrQiQAAAABJRU5ErkJggg=='
  return (
    <section className="px-2 pb-14 pt-4 lg:pt-12">
      <h2 className="mb-2 text-2xl font-extrabold text-left lg:text-3xl text-slate-200">
        Workflow
      </h2>
      <p className="mb-8 leading-6 text-zinc-400">
        I adhere to the Agile methodology for software development. It includes
        analyzing and planning requirements, iterative software building, and
        continuous improvement of design and functionality. The focus is on
        delivering value to customers quickly through smaller, market-ready
        launches based on customer feedback.
      </p>
      <Image
        src="/workflow.svg"
        alt="workflow"
        width={1000}
        height={450}
        className="hidden mx-auto md:block"
        placeholder="blur"
        blurDataURL={blurDataURL}
        quality={75}
      />
      <Image
        src="/workflow_mobile.svg"
        alt="workflow"
        width={320}
        height={800}
        className="mx-auto md:hidden"
        placeholder="blur"
        blurDataURL={blurDataURL}
        quality={75}
      />
    </section>
  )
}
