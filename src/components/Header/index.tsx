import { useEffect, useRef, useState } from 'react'
import Me from '../../assets/tomgordon.webp'
import { useFun } from '../../state/fun'
import ThemeToggle from '../ThemeToggle'
import styles from './styles.module.css'

/** Header chatter, picked by how far down the page the visitor is. */
const MESSAGES = [
  'Thanks for scrolling!',
  'Still here? Nice.',
  'Nearly at the bottom…',
  'The mouse is peckish… 🧀',
]

function stageFor(scrollY: number, progress: number): number {
  if (scrollY <= 90) return -1
  if (progress >= 0.97) return 3
  if (progress > 0.6) return 2
  if (progress > 0.3) return 1
  return 0
}

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const avatarRef = useRef<HTMLImageElement>(null)
  const [compact, setCompact] = useState(false)
  const [stage, setStage] = useState(-1)
  const { cheeseEaten } = useFun()

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, y / max) : 0
      headerRef.current?.style.setProperty('--progress', String(progress))
      setCompact(y > 60)
      setStage(stageFor(y, progress))
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  const backToTop = () => {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    if (!reduceMotion) {
      avatarRef.current?.animate([{ rotate: '0deg' }, { rotate: '360deg' }], {
        duration: 700,
        easing: 'cubic-bezier(0.3, 1.4, 0.6, 1)',
      })
    }
  }

  const message =
    stage < 0
      ? null
      : cheeseEaten
        ? 'Om nom. Thanks for the cheese!'
        : MESSAGES[stage]

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${compact ? styles.compact : ''}`}
    >
      <button
        type="button"
        className={styles.avatar}
        onClick={backToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <img
          ref={avatarRef}
          src={Me}
          alt=""
          width={72}
          height={72}
          decoding="async"
        />
      </button>
      {message && (
        <span key={message} className={styles.message} aria-hidden="true">
          {message}
        </span>
      )}
      <ThemeToggle />
      <div className={styles.progress} aria-hidden="true" />
    </header>
  )
}
