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
    {data.links.map(link => (
      <ListItem key={link.id} {...link} />
    ))}
  </ul>
)

export default LinkList
