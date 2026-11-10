import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import styles from './styles.module.css'

type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

/**
 * Runs in <head> before first paint so a saved theme never flashes the
 * wrong colours. Without a saved choice the page follows the OS setting.
 */
export const themeInitScript = `try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`

function currentTheme(): Theme {
  const pinned = document.documentElement.dataset.theme
  if (pinned === 'light' || pinned === 'dark') return pinned
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  // Unknown until mounted: the server can't see the visitor's OS setting.
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    setTheme(currentTheme())
    const query = matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setTheme(currentTheme())
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark'
    const root = document.documentElement

    const apply = () => {
      root.dataset.theme = next
      setTheme(next)
    }

    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable (private mode); the switch still works.
    }

    // Spread the new theme out from the button where supported.
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect()
    root.style.setProperty('--vt-x', `${left + width / 2}px`)
    root.style.setProperty('--vt-y', `${top + height / 2}px`)

    if (
      document.startViewTransition &&
      !matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document.startViewTransition(apply)
    } else {
      apply()
    }
  }

  const label =
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
        <mask id="theme-toggle-moon">
          <rect width="24" height="24" fill="white" />
          <circle className={styles.bite} cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          className={styles.core}
          cx="12"
          cy="12"
          r="5"
          mask="url(#theme-toggle-moon)"
        />
        <g className={styles.rays}>
          {Array.from({ length: 8 }, (_, i) => (
            <line
              key={i}
              x1="12"
              y1="1.5"
              x2="12"
              y2="4"
              transform={`rotate(${i * 45} 12 12)`}
            />
          ))}
        </g>
      </svg>
    </button>
  )
}
