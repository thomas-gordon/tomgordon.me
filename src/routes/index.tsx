import { createFileRoute } from '@tanstack/react-router'
import Me from './tomgordon.png'
import LinkList from '../components/LinkList'
import styles from './styles.module.css'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className={styles['app-wrapper']}>
      <aside className={styles.avatar}>
        <img src={Me} width={100} alt={'Tom Gordon'} title={'Tom Gordon'} />
      </aside>
      <main className={styles['children-wrapper']}>
        <h1>Hi, I′m Tom. </h1>
        <h2>
          {' '}
          The modern internet is a mess of competing cultures, technologies and
          marketing strength. My work aims to bring clarity to this landscape.
        </h2>

        <p>
          Today, web development for the browser is generally called 'full
          stack development'. This is a very rational term. It encompasses the
          entire process of development from the database to the user
          interface. Despite this, I call myself a{' '}
          <strong>Frontend developer</strong> because my focus and interest in
          development is on the combination of design and user experience,
          working closely with designers to enable their designs to become
          applications and web experiences that marry clear human thinking with
          technology.
        </p>
        <p>
          I always aim to deliver a given digital project along with a high
          degree of compatibility across the myriad platforms used to consume
          the web. Having had 10 years experience, I am able to adjust the
          delivery of a project according to the relevant{' '}
          <a href="https://en.wikipedia.org/wiki/Project_management_triangle">
            time/cost/quality
          </a>{' '}
          paradigm.
        </p>
        <p>
          I began my development career at the birth of the internet, with
          simple HTML template cutup. Today my skillset and ability has
          expanded to the point where I can deploy whole responsive React apps
          by myself, from design through to deployment.
        </p>
        <p>
          I am well versed in Agile development, having worked on projects that
          land all along the spectrum from complete waterfall to Agile SCRUM.
        </p>
        <h3>
          Currently at work I′m using the following tools to get the job done.
        </h3>
        <ul>
          <li>
            Tech Libraries:{' '}
            <a href="https://facebook.github.io/react/" target="_blank">
              React
            </a>
            ,{' '}
            <a href="https://facebook.github.io/react-native/" target="_blank">
              React Native
            </a>
            ,{' '}
            <a href="https://tanstack.com/query/latest/docs" target="_blank">
              React Query
            </a>
          </li>
          <li>
            Build tools:{' '}
            <a href="https://docs.npmjs.com/misc/scripts" target="_blank">
              NPM Scripts
            </a>
            ,{' '}
            <a href="https://webpack.github.io/" target="_blank">
              webpack
            </a>
          </li>
          <li>
            Testing:{' '}
            <a href="https://vitest.dev/" target="_blank">
              Vitest
            </a>
            ,{' '}
            <a href="https://www.browserstack.com/" target="_blank">
              BrowserStack
            </a>
          </li>
          <li>
            Analytics:{' '}
            <a
              href="https://analytics.google.com/analytics/web/"
              target="_blank"
            >
              Google Analytics
            </a>
            ,{' '}
            <a href="https://mixpanel.com/" target="_blank">
              Mixpanel
            </a>
          </li>
          <li>
            Project Management:{' '}
            <a href="https://www.atlassian.com/" target="_blank">
              Atlassian
            </a>
          </li>
          <li>
            Design:{' '}
            <a href="https://www.figma.com/" target="_blank">
              Figma
            </a>
          </li>
          <li>
            Code Editing:{' '}
            <a href="https://code.visualstudio.com/" target="_blank">
              VSCode
            </a>
          </li>
          <li>
            Deployment:{' '}
            <a href="https://www.docker.com/" target="_blank">
              Docker
            </a>
          </li>
        </ul>
        <h3>Contact and see what I′m up to:</h3>
        <LinkList />
        <h3>Recent work</h3>
        <ul>
          <li>
            <a href="http://pladia.io//" target="_blank">
              Pladia
            </a>
            : Working across multiple teams, I have led the frontend
            development of the Pladia product suite for over 3 years. This work
            comprises a series of web applications designed to streamline the
            workflow of gallery management and experience design.
          </li>
          <li>
            <a href="https://www.yvw.com.au/" target="_blank">
              Yarra Valley Water | Website
            </a>
            : I worked on the frontend components and the style guide onsite,
            while assisting with integrating agile processes into Yarra
            Valley′s project management style.
          </li>
          <li>
            <a href="https://www.slv.vic.gov.au/" target="_blank">
              State Library Victoria | Website
            </a>
            : I worked on the frontend and assisted with skilling up the SLV
            development team in best practices around frontend development and
            agile project management.
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.commbank.com.au/" target="_blank">
              CBA (React app)
            </a>
          </li>
          <li>
            <a href="https://www.headspace.org.au/" target="_blank">
              Headspace
            </a>
          </li>
          <li>
            <a href="http://www.fya.org.au/" target="_blank">
              FYA
            </a>
          </li>
        </ul>
      </main>
    </div>
  )
}
