import type { CSSProperties } from 'react'
import type { ExperienceRow } from '../../content'
import styles from './styles.module.css'

type Props = {
  stat: { value: number; label: string }
  lead: string
  rows: ExperienceRow[]
}

/** Each bar is a capability's share of the whole career. */
export default function Experience({ stat, lead, rows }: Props) {
  return (
    <>
      <p className={`${styles.stat} reveal`}>
        <span className={styles.value}>{stat.value}</span>
        <span className={styles.label}>{stat.label}</span>
      </p>
      <p className={`${styles.lead} reveal`}>{lead}</p>
      <ul className={styles.rows}>
        {rows.map(row => (
          <li key={row.title} className={`${styles.row} reveal`}>
            <span className={styles.years}>{row.years}+ yrs</span>
            <h3 className={styles.title}>{row.title}</h3>
            <span className={styles.track} aria-hidden="true">
              <span
                className={styles.bar}
                style={
                  {
                    '--share': Math.min(1, row.years / stat.value),
                  } as CSSProperties
                }
              />
            </span>
            <p className={styles.detail}>{row.detail}</p>
          </li>
        ))}
      </ul>
      <p className={styles.caption}>
        Bars show each one against my full {stat.value} years in web
        development.
      </p>
    </>
  )
}
