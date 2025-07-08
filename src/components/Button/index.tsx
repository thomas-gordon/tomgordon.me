import styles from './styles.module.css'
import { Link } from '@tanstack/react-router'

type ButtonProps = {
  href?: string
  to?: string
  onClick?: () => void
  children?: React.ReactNode
  size?: 'default' | 'small' | 'large'
  value?: string
  target?: string
}

const Button = (props: ButtonProps) => {
  // <Link></Link>
  if (props.to) {
    return <Link {...props} className={styles.button} />
  }
  // <a></a>
  if (props.href) {
    return <a {...props} className={styles.button} />
  }

  // <input type="submit" />
  if (!props.children) {
    return <button type="submit" {...props} className={styles.button} />
  }

  return <button {...props} className={styles.button} />
}
export default Button
