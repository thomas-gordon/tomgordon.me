import { useQuery } from '@tanstack/react-query'
import { site } from '../content'

export type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  pushed_at: string
  fork: boolean
  archived: boolean
}

const SHOW = 5

const fetchRepos = async (): Promise<GitHubRepo[]> => {
  const res = await fetch(
    `https://api.github.com/users/${site.githubUser}/repos?sort=pushed&per_page=20`,
  )
  if (!res.ok) throw new Error('Failed to fetch repos')
  const repos = (await res.json()) as GitHubRepo[]
  return repos.filter(repo => !repo.fork && !repo.archived).slice(0, SHOW)
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 5,
  })
}
