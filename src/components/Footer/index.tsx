import { site } from '../../content'
import Cheese from '../Cheese'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} {site.name} · Made in Melbourne
      </p>
      <Cheese />
    </footer>
  )
}
