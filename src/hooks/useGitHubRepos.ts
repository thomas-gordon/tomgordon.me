import { useQuery } from '@tanstack/react-query'

type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
}

const fetchRepos = async (): Promise<GitHubRepo[]> => {
  const res = await fetch(
    'https://api.github.com/users/thomas-gordon/repos?sort=updated&per_page=5',
  )
  if (!res.ok) throw new Error('Failed to fetch repos')
  return res.json() as Promise<GitHubRepo[]>
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 5,
  })
}
