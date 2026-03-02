import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import Me from '../assets/tomgordon.png'
import LinkList from '../components/LinkList'
import GitHubRepos from '../components/GitHubRepos'
import styles from './styles.module.css'
import md from '../homepage.md'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Route = createFileRoute('/')({
  component: Home,
})
function LinkRenderer(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  )
}
function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles['app-wrapper']}>
      <aside
        className={`${styles.avatar} ${scrolled ? styles['avatar--scrolled'] : ''}`}
      >
        <img src={Me} alt={'Tom Gordon'} title={'Tom Gordon'} />
      </aside>
      <main
        className={`${styles['children-wrapper']} ${styles['content-area']}`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ a: LinkRenderer }}
        >
          {md}
        </ReactMarkdown>
        <LinkList />
        <h2>Recent GitHub repos</h2>
        <GitHubRepos />
      </main>
    </div>
  )
}
