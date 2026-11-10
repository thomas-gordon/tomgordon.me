import type { ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
  heading: string
  lead?: string
  children: ReactNode
  defaultOpen?: boolean
}

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

/**
 * A collapsible section built on native <details>, so it works without
 * JavaScript, is keyboard accessible, and find-in-page can open it.
 */
export default function Section({
  heading,
  lead,
  children,
  defaultOpen = true,
}: Props) {
  return (
    <details className={styles.section} open={defaultOpen} id={slug(heading)}>
      <summary className={`${styles.summary} reveal`}>
        <h2 className={styles.heading}>{heading}</h2>
        <svg className={styles.chevron} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className={styles.body}>
        {lead && <p className={`${styles.lead} reveal`}>{lead}</p>}
        {children}
      </div>
    </details>
  )
}
