// src/routes/__root.tsx
/// <reference types="vite/client" />
import type { PropsWithChildren, JSX } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import '../root.css'
import FontFaceObserver from 'fontfaceobserver'
import MouseCursor from '../components/MouseCursor'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Tom Gordon — Engineer & Team Lead, Melbourne',
      },
    ],
    links: [
      {
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
        rel: 'stylesheet',
      },
      { rel: 'icon', href: '/favicon.ico' },
    ],
    scripts: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-Q1EHMXSL9G',
        async: true,
      },
    ],
  }),

  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

const RootDocument = ({
  children,
}: Readonly<PropsWithChildren>): JSX.Element => {
  useEffect(() => {
    const robotoObserver = new FontFaceObserver('Space Grotesk', {})

    robotoObserver.load().then(
      () => {
        document.body.classList.add('fontLoaded')
      },
      () => {
        document.body.classList.remove('fontLoaded')
      },
    )
  }, [])
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
          <MouseCursor />
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  )
}
