/// <reference types="vite/client" />
import type { PropsWithChildren } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../root.css'
import { site } from '../content'
import ShareImage from '../assets/tomgordon.png'
import MouseCursor from '../components/MouseCursor'
import { themeInitScript } from '../components/ThemeToggle'
import { FunProvider } from '../state/fun'

const queryClient = new QueryClient()

const FONTS =
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap'

const analyticsScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${site.analyticsId}');`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: site.title },
      { name: 'description', content: site.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: site.title },
      { property: 'og:description', content: site.description },
      { property: 'og:url', content: site.url },
      { property: 'og:image', content: new URL(ShareImage, site.url).href },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [
      { rel: 'canonical', href: site.url },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      { rel: 'stylesheet', href: FONTS },
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

function RootDocument({ children }: Readonly<PropsWithChildren>) {
  return (
    // The theme script may set data-theme before React hydrates.
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
        {/* Here rather than in head().meta, which keeps one tag per name. */}
        <meta
          name="theme-color"
          content="#f1f4f8"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0d1420"
          media="(prefers-color-scheme: dark)"
        />
        {/* Analytics only runs in production builds. */}
        {import.meta.env.PROD && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${site.analyticsId}`}
            />
            <script dangerouslySetInnerHTML={{ __html: analyticsScript }} />
          </>
        )}
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <FunProvider>
            {children}
            <MouseCursor />
          </FunProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  )
}
