import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import Me from '../assets/tomgordon.png'
import LinkList from '../components/LinkList'
import GitHubRepos from '../components/GitHubRepos'
import AccordionSection from '../components/AccordionSection'
import styles from './styles.module.css'
import md from '../homepage.md'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useInView } from '../hooks/useInView'

export const Route = createFileRoute('/')({
  component: Home,
})

// --- Markdown section parser ---
type Section = { heading: string | null; content: string }

function parseSections(markdown: string): Section[] {
  const lines = markdown.split('\n')
  const sections: Section[] = []
  let heading: string | null = null
  let buffer: string[] = []

  for (const line of lines) {
    if (line.startsWith('## ')) {
      sections.push({ heading, content: buffer.join('\n') })
      heading = line.slice(3).trim()
      buffer = []
    } else {
      buffer.push(line)
    }
  }
  sections.push({ heading, content: buffer.join('\n') })
  return sections.filter(s => s.content.trim() || s.heading)
}

// --- Animated ReactMarkdown renderers ---
function AnimatedP({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { ref, inView } = useInView()
  return (
    <p
      ref={ref as React.Ref<HTMLParagraphElement>}
      className={inView ? 'animate-in' : 'pre-animate'}
      {...props}
    >
      {children}
    </p>
  )
}

function AnimatedUl({
  children,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  const { ref, inView } = useInView()
  return (
    <ul
      ref={ref as React.Ref<HTMLUListElement>}
      className={inView ? 'animate-in' : 'pre-animate'}
      {...props}
    >
      {children}
    </ul>
  )
}

function AnimatedTable({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  const { ref, inView } = useInView()
  return (
    <table
      ref={ref as React.Ref<HTMLTableElement>}
      className={inView ? 'animate-in' : 'pre-animate'}
      {...props}
    >
      {children}
    </table>
  )
}

function LinkRenderer(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  )
}

// For accordion section content — each element animates on scroll
const mdComponents = {
  a: LinkRenderer,
  p: AnimatedP,
  ul: AnimatedUl,
  table: AnimatedTable,
}

// For intro — the whole block animates as one, no inner animations
const introComponents = {
  a: LinkRenderer,
}

// --- Home ---
function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [h1Gone, setH1Gone] = useState(false)
  const { ref: introRef, inView: introInView } = useInView()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setH1Gone(y > 90)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sections = parseSections(md)

  return (
    <div className={styles['app-wrapper']}>
      <aside
        className={`${styles.avatar} ${scrolled ? styles['avatar--scrolled'] : ''}`}
      >
        <img src={Me} alt={'Tom Gordon'} title={'Tom Gordon'} />
        <span
          className={`${styles['header-name']} ${h1Gone ? styles['header-name--visible'] : ''}`}
        >
          Thanks for scrolling!
        </span>
      </aside>
      <main
        className={`${styles['children-wrapper']} ${styles['content-area']}`}
      >
        {sections.map((section, i) =>
          section.heading === null ? (
            <div
              key={i}
              ref={introRef as React.Ref<HTMLDivElement>}
              className={introInView ? 'animate-in' : 'pre-animate'}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={introComponents}
              >
                {section.content}
              </ReactMarkdown>
            </div>
          ) : (
            <AccordionSection key={section.heading} heading={section.heading}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={mdComponents}
              >
                {section.content}
              </ReactMarkdown>
            </AccordionSection>
          ),
        )}
        <LinkList />
        <h2>Recent GitHub repos</h2>
        <GitHubRepos />
      </main>
    </div>
  )
}
