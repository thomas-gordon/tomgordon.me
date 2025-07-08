/**
 *
 * ListItem
 *
 */

import Button from '../Button'
import Twitter from '../SVG/Twitter'
import Medium from '../SVG/Medium'
import Github from '../SVG/Github'
import Resume from '../SVG/Resume'
import LinkedIn from '../SVG/LinkedIn'
import Email from '../SVG/Email'
import Codepen from '../SVG/Codepen'
import styles from './styles.module.css'
import { JSX } from 'react'
import { z } from 'zod'

type LinkProps = {
  id: number
  url: string
  text: string
  icon: string
}

const iconSchema = z.enum([
  'email',
  'codepen',
  'linkedIn',
  'github',
  'twitter',
  'resume',
  'medium',
])

const getIcon = (icon: LinkProps['icon']): JSX.Element | null => {
  const parsedIcon = iconSchema.parse(icon)
  switch (parsedIcon) {
    case 'email':
      return <Email />
    case 'codepen':
      return <Codepen />
    case 'linkedIn':
      return <LinkedIn />
    case 'github':
      return <Github />
    case 'twitter':
      return <Twitter />
    case 'resume':
      return <Resume />
    case 'medium':
      return <Medium />
    default:
      return null
  }
}

const ListItem = (link: LinkProps) => (
  <li className={styles.li}>
    <Button href={link.url} target="_blank">
      {link.text}
      {getIcon(link.icon)}
    </Button>
  </li>
)

export default ListItem
