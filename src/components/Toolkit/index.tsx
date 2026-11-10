import type { ToolGroup } from '../../content'
import { linkProps } from '../../utils/links'
import styles from './styles.module.css'

export default function Toolkit({ groups }: { groups: ToolGroup[] }) {
  return (
    <dl className={styles.toolkit}>
      {groups.map(group => (
        <div key={group.category} className={`${styles.group} reveal`}>
          <dt className={styles.category}>{group.category}</dt>
          <dd>
            <ul className={styles.chips}>
              {group.tools.map(tool => (
                <li key={tool.name}>
                  <a className={styles.chip} {...linkProps(tool.url)}>
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}
