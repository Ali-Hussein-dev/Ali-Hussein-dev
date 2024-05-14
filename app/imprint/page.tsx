import * as React from 'react'
const content = [
  {
    title: 'Angaben gemäß § 5 TMG',
    content: 'Ali Hussein\nBarlachstr 3\n21073 Hamburg',
  },
  {
    title: 'Contact',
    content: 'Tel.: +49 157 59046794 \n Email: me@ali-hussein.com\n',
  },
  {
    title: 'Responsible for Content',
    content: `
Ali Hussein
Barlachstr 3
21073 Hamburg`,
  },
  {
    title: 'Disclaimer',
    content: `Despite careful content control, we assume no liability for the
     content of external links.
    The operators of the linked pages are solely responsible for their content.`,
  },
  {
    title: 'Online Dispute Resolution (ODR) Platform',
    content: `The European Commission provides a platform for online dispute resolution (ODR), which you can find at https://ec.europa.eu/consumers/odr/. We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.`,
  },
  {
    title: 'Copyright',
    content: `The content and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.`,
  },
]
//======================================
const ImprintPage = () => {
  return (
    <article className="flex-col-center mx-auto max-w-5xl py-8 ">
      <div className="space-y-4 prose prose-zinc prose-p:text-zinc-500 prose-headings:text-zinc-400">
        {content.map((o, i) => (
          <div key={i}>
            <h3>{o.title}</h3>
            {o.content.split('\n').map((line, i) => (
              <p key={i} className="my-0.5">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </article>
  )
}
export default ImprintPage
