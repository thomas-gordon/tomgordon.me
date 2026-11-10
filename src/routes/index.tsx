import { createFileRoute } from '@tanstack/react-router'
import { getContent } from '../content'
import Header from '../components/Header'
import LinkList from '../components/LinkList'
import Section from '../components/Section'
import Toolkit from '../components/Toolkit'
import WorkList from '../components/WorkList'
import Experience from '../components/Experience'
import GitHubRepos from '../components/GitHubRepos'
import Footer from '../components/Footer'
import styles from './styles.module.css'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { intro, links, toolkit, work, experience, repos } = getContent()

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={`${styles.intro} enter`}>
          <h1 className={styles.title}>{intro.heading}</h1>
          {intro.paragraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <LinkList links={links} />

        <Section heading={toolkit.heading} lead={toolkit.lead}>
          <Toolkit groups={toolkit.groups} />
        </Section>

        <Section heading={work.heading}>
          <WorkList items={work.items} />
        </Section>

        <Section heading={experience.heading}>
          <Experience
            stat={experience.stat}
            lead={experience.lead}
            rows={experience.rows}
          />
        </Section>

        <Section heading={repos.heading}>
          <GitHubRepos />
        </Section>
      </main>
      <Footer />
    </div>
  )
}
