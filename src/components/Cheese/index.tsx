import { useEffect, useRef } from 'react'
import type { PointerEvent } from 'react'
import { CHEESE_BITES, useFun } from '../../state/fun'
import styles from './styles.module.css'

/** Where each bite lands on the wedge, in order. */
const BITES = [
  { cx: 6, cy: 26, r: 6 },
  { cx: 15, cy: 18, r: 6.5 },
  { cx: 26, cy: 13, r: 7 },
]

const NIBBLE_MS = 450

/**
 * Easter egg: hover the mouse cursor over the cheese and it nibbles it
 * (tap or click works too). The rest of the page reacts once it's gone.
 */
export default function Cheese() {
  const { bites, cheeseEaten, bite } = useFun()
  const timer = useRef<number>(undefined)

  const stopNibbling = () => window.clearInterval(timer.current)

  const startNibbling = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return
    stopNibbling()
    timer.current = window.setInterval(bite, NIBBLE_MS)
  }

  useEffect(() => {
    if (cheeseEaten) stopNibbling()
  }, [cheeseEaten])

  useEffect(() => stopNibbling, [])

  if (cheeseEaten) {
    return (
      <p className={styles.done} role="status">
        <span aria-hidden="true">🐭💛</span> The mouse thanks you.
      </p>
    )
  }

  return (
    <button
      type="button"
      className={styles.cheese}
      onClick={bite}
      onPointerEnter={startNibbling}
      onPointerLeave={stopNibbling}
      aria-label={`Feed the mouse some cheese (${CHEESE_BITES - bites} bites left)`}
      title="Feed the mouse?"
    >
      <svg
        key={bites}
        className={bites > 0 ? styles.wobble : undefined}
        viewBox="0 0 40 32"
        width="40"
        height="32"
        aria-hidden="true"
      >
        <mask id="cheese-bites">
          <rect width="40" height="32" fill="white" />
          {BITES.slice(0, bites).map(b => (
            <circle key={b.cx} {...b} fill="black" />
          ))}
        </mask>
        <g mask="url(#cheese-bites)">
          <path d="M3 28 L37 28 L37 10 Z" className={styles.face} />
          <path d="M3 28 L37 10 L31 5 Z" className={styles.top} />
          <path d="M37 10 L37 28" className={styles.edge} />
          <circle cx="30" cy="22" r="2.6" className={styles.hole} />
          <circle cx="33.5" cy="15" r="1.6" className={styles.hole} />
          <circle cx="21" cy="24.5" r="1.6" className={styles.hole} />
        </g>
      </svg>
      {bites > 0 && (
        <span key={bites} className={styles.nom} aria-hidden="true">
          nom
        </span>
      )}
    </button>
  )
}
