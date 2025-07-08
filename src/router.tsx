// src/router.tsx
import {
  createRouter as createTanStackRouter,
  Link,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: () => {
      return (
        <div className="text-center">
          <h1 className="text-6xl mt-10">The void offers nothing</h1>
          <p>Maybe you wanted to read about Tom Gordon, frontend engineer?</p>
          <p>
            <Link to="/" className="text-blue hover:underline">
              Read that instead!
            </Link>
          </p>
        </div>
      )
    },
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
