import type { JSX } from 'react'
import type { ContactLink, LinkIcon } from '../../content'
import Button from '../Button'
import Codepen from '../SVG/Codepen'
import Email from '../SVG/Email'
import Github from '../SVG/Github'
import LinkedIn from '../SVG/LinkedIn'
import Medium from '../SVG/Medium'
import Resume from '../SVG/Resume'
import styles from './styles.module.css'

const icons: Record<LinkIcon, () => JSX.Element> = {
  email: Email,
  codepen: Codepen,
  linkedIn: LinkedIn,
  github: Github,
  resume: Resume,
  medium: Medium,
}

export default function LinkList({ links }: { links: ContactLink[] }) {
  return (
    <ul className={styles.list}>
      {links.map((link, i) => {
        const Icon = icons[link.icon]
        return (
          <li
            key={link.url}
            className={styles.item}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <Button href={link.url}>
              {link.text}
              <Icon />
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
