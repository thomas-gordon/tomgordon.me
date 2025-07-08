import { createFileRoute } from '@tanstack/react-router'
import Me from '../assets/tomgordon.png'
import LinkList from '../components/LinkList'
import styles from './styles.module.css'
import md from '../homepage.md'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Route = createFileRoute('/')({
  component: Home,
})
function LinkRenderer(props) {
  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  )
}
function Home() {
  return (
    <div className={styles['app-wrapper']}>
      <aside className={styles.avatar}>
        <img src={Me} width={100} alt={'Tom Gordon'} title={'Tom Gordon'} />
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
      </main>
    </div>
  )
}
