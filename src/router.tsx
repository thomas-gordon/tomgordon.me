// src/router.tsx
import {
  createRouter as createTanStackRouter,
  Link,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: () => {
      return (
        <main className="mx-auto flex min-h-screen max-w-[640px] flex-col items-center justify-center gap-4 bg-surface px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-ink">
            The void offers nothing
          </h1>
          <p className="text-ink-muted">
            Maybe you wanted to read about Tom Gordon, technical lead?
          </p>
          <p>
            <Link to="/" className="font-semibold">
              Read that instead!
            </Link>
          </p>
        </main>
      )
    },
  })

  return router
}
