import type { WorkItem } from '../../content'
import { linkProps } from '../../utils/links'
import styles from './styles.module.css'

export default function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.name} className={`${styles.item} reveal`}>
          <h3 className={styles.name}>
            {item.url ? (
              <a {...linkProps(item.url)}>
                {item.name}
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            ) : (
              item.name
            )}
          </h3>
          <p className={styles.summary}>{item.summary}</p>
        </li>
      ))}
    </ul>
  )
}
