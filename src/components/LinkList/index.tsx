/**
 *
 * LinkList
 *
 */
import data from '../../data/global.json'
import ListItem from '../ListItem'
import styles from './styles.module.css'

const LinkList = () => (
  <ul className={styles.ul}>
    {data.links.map((link, i) => (
      <ListItem key={link.id} {...link} index={i} />
    ))}
  </ul>
)

export default LinkList
