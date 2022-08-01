import { Text, Title } from '@mantine/core'
import * as React from 'react'
//======================================
const Aboutme: React.FC = () => {
  //======================================return
  return (
    <div id="About" className="layout ">
      <section className="container-white text-slate-300 bg-slate-900/70 ">
        <Title
          order={1}
          className="pb-[0.15rem] text-lg border-b border-slate-700 mb-4  uppercase"
        >
          My Story
        </Title>
        <article>
          <Title order={2} className="text-2xl uppercase text-primary-200">
            Post Graduation
          </Title>
          <Text size="xl" className="mb-4">
            I left Syria at the end of 2011 after I graduated from the
            University of Damascus. I studied business administration and
            management. I moved to Lebanon to study master but the economical
            situation was not good. So I had to work in a different sector. I
            worked in gastronomy for about 4 years, till I left it at the end of
            2015. When I arrived in Germany seeking a secure and better life,
            new challenges and opportunities popped up to me. The first
            challenge I had overcome was learning the language. So I started to
            learn German from the first day I arrived in Hamburg without waiting
            for participating in language courses. I am sure if was learning
            fast or slow, but the language was a bit hard but interesting to
            dive deeper into it.
          </Text>
          <Title order={2} className="text-2xl uppercase text-primary-200">
            LEARNING GERMAN
          </Title>
          <div className="mb-4 space-y-2">
            <Text size="xl">
              {' '}
              A typical problem that any language learner faces is the speaking
              skill, you learn and learn and when I have a conversation with a
              native speaker, you might wonder afterward where did what I
              learned go. so After I reach a lower-middle level, I came up with
              a solution to test. The solution was to use Speech Recognition
              Technology for voice recognition. The user speaks predefined
              sentences that should help learners to get familiar with sentence
              structures. I spent some shaping the solution, refining it, and
              thinking of providing an accurate measurement of speaking skills.
              When I decided to bring it to life, I had no idea where to start
              or to go, literally! Everything I knew about programming was two
              things: the first one, HTML is used for web pages and Java does
              not have to do Javascript. That was my whole background in
              programming.
            </Text>
          </div>
          <Title order={2} className="text-2xl uppercase text-primary-200">
            My tough Journey To Tech
          </Title>
          <div className="mb-4 space-y-2">
            <Text size="xl">
              I started searching for an agency that could convert my idea into
              a functional application, and it does not cost me too much. I
              found one through the internet. I reached out to them and
              explained the idea to them. I provided a wireframe of the core
              functionalities as well to make it as clear as possible. After we
              agreed, I had to wait for about two months to receive the first
              shipment. I was so excited to see it, but the output was horrible,
              the UI, colors, and belonged to the 1990s. However, I took it easy
              and I sent my feedback to the team. A few months later I decided
              to stop sending feedback because I finally found that the team is
              not competent! I lost hope in that company. So I thought of asking
              for the codebase and then seeking freelancers. To send me the
              codebase I had to pay extra money as stated in the contract.
            </Text>
            <Text size="xl">
              I was alone with a codebase that I did not understand at all. It
              was not a nice feeling. After searching for days I found an agency
              in Upwork with a high rate and positive feedback. I told the team
              the story and showed them the codebase. They recommended starting
              from scratch because the code is hard to fix. I could believe them
              easily because the app was not functional and the UI was messy.
              This time I tried to avoid making the same mistakes. We agreed on
              sending the app to me after every milestone they finished and when
              I am happy with it, we move to the next milestone or make changes
              if necessary. The backend was written in PHP, Laravel. The team
              did not have a PHP developer. So I had also to find an additional
              developer to take responsibility for the backend. It was not a big
              problem Upwork is full of Indian PHP developers, who are thriving
              to learn.
            </Text>
            <Text size="xl">
              Having two teams working in different time zones was not a good
              idea. Additionally, the Indian team was behind the Egyptian team
              in implementation and skills. They were delivering the features
              with critical bugs. I wasted too much time on communication until
              I realized, I am stuck again and cannot make any progress this
              way. So I discussed the issue with the agency in Egypt and they
              recommended taking care of the backend. but they have to re-code
              the backend in different technology (Ruby on Rail) because they do
              not deal with PHP. I did not have other options, so I had to
              accept their offer.
            </Text>
            <Text size="xl">
              Afterward, things went well in terms of the implementation. I did
              not have to think about it again. Also, I still remember once I
              receive the first payment from users. It was one of the happiest
              moments. During this time, I learned CSS and Html because we did
              not have a landing page for the app. But happy moments did not
              last. Issues in marketing and finance popped up. After I reached
              out to VCs and Angle investors, I came up with nothing. Without
              finding financial support, I cannot continue.
            </Text>
            <Text size="xl">
              I had only one option, Give up the project and find something else
              to do. I did that but also decided to stay in the tech industry,
              and the only way to stay in is to learn to code. It is something I
              wanted not to learn at all. I did not feel interested in details
              and low-level thinking or am smart enough to be an engineer.
              Learning many things gave me enough confidence to believe in
              myself.
            </Text>
          </div>
          <Title order={2} className="text-2xl uppercase text-primary-200">
            Finally
          </Title>
          <Text size="xl">
            Being a solo founder with non-technical background for tech-based a
            startup is a bad idea, I think. It could be a huge mistake. Think a
            hundred times before doing such a thing. That was my story in a
            nutshell. I skipped a lot of details and things I went through. I
            hope you enjoyed it. Reach out to me if you have any questions. I am
            on Twitter.
          </Text>
        </article>
      </section>
    </div>
  )
}
export default Aboutme
