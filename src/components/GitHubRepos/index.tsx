import { useGitHubRepos } from '../../hooks/useGitHubRepos'
import Button from '../Button'
import styles from './styles.module.css'

export default function GitHubRepos() {
  const { data: repos, isLoading, isError } = useGitHubRepos()

  if (isLoading) return <p className={styles.state}>Loading repos…</p>
  if (isError) return <p className={styles.state}>Could not load repos.</p>

  return (
    <ul className={styles.list}>
      {repos?.map((repo, i) => (
        <li
          key={repo.id}
          className={styles.item}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <Button href={repo.html_url} target="_blank">
            {repo.name}
            {repo.language && (
              <span className={styles.lang}>{repo.language}</span>
            )}
          </Button>
          {repo.description && (
            <p className={styles.description}>{repo.description}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
