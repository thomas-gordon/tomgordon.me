import { useGitHubRepos } from '../../hooks/useGitHubRepos'
import { site } from '../../content'
import Button from '../Button'
import styles from './styles.module.css'

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 31_536_000],
  ['month', 2_592_000],
  ['week', 604_800],
  ['day', 86_400],
  ['hour', 3_600],
  ['minute', 60],
]

const relative = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

function timeAgo(iso: string): string {
  const seconds = (Date.parse(iso) - Date.now()) / 1000
  for (const [unit, size] of UNITS) {
    if (Math.abs(seconds) >= size) {
      return relative.format(Math.round(seconds / size), unit)
    }
  }
  return 'just now'
}

export default function GitHubRepos() {
  const { data: repos, isPending, isError } = useGitHubRepos()

  if (isPending) {
    return (
      <ul className={styles.list} aria-busy="true" aria-label="Loading repos">
        {[0, 1, 2].map(i => (
          <li key={i} className={styles.skeleton} />
        ))}
      </ul>
    )
  }

  if (isError || !repos.length) {
    return (
      <p className={styles.state}>
        Couldn't load repos right now —{' '}
        <a href={`https://github.com/${site.githubUser}`}>
          see them on GitHub
        </a>
        .
      </p>
    )
  }

  return (
    <ul className={styles.list}>
      {repos.map((repo, i) => (
        <li
          key={repo.id}
          className={styles.item}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <Button href={repo.html_url}>
            {repo.name}
            {repo.language && (
              <span className={styles.lang}>{repo.language}</span>
            )}
          </Button>
          <p className={styles.meta}>
            {repo.description && (
              <span className={styles.description}>{repo.description}</span>
            )}
            <span>
              Updated {timeAgo(repo.pushed_at)}
              {repo.stargazers_count > 0 && ` · ★ ${repo.stargazers_count}`}
            </span>
          </p>
        </li>
      ))}
    </ul>
  )
}
