// src/routes/__root.tsx
/// <reference types="vite/client" />
import type { PropsWithChildren, JSX } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { useEffect } from 'react'
import '../root.css'
import FontFaceObserver from 'fontfaceobserver'

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
        title: 'Tom Gordon - Frontend Developer based in Melbourne, Australia',
      },
    ],
    links: [
      {
        href: 'https://fonts.googleapis.com/css?family=Crimson+Text',
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
    const robotoObserver = new FontFaceObserver('Crimson Text', {})

    // When Open Sans is loaded, add a font-family using Open Sans to the body
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
        {children}
        <Scripts />
      </body>
    </html>
  )
}
