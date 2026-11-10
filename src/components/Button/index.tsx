import type { AnchorHTMLAttributes } from 'react'
import { linkProps } from '../../utils/links'
import styles from './styles.module.css'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

/** A chunky, pressable link. Off-site links open in a new tab. */
const Button = ({ href, className, ...rest }: Props) => (
  <a
    {...linkProps(href)}
    {...rest}
    className={className ? `${styles.button} ${className}` : styles.button}
  />
)

export default Button
