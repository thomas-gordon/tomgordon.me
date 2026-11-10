import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useFun } from '../../state/fun'
import styles from './styles.module.css'

// The nose tip (44, 14) is the hotspot: it sits exactly on the real pointer
// and the mouse rotates around it, so clicks land where you expect.
const HOTSPOT_X = 44
const HOTSPOT_Y = 14
/** Resting pose: nose up and to the left, like a regular arrow cursor. */
const REST_ANGLE = -120
/** How long the mouse waits after you stop before settling back. */
const SETTLE_MS = 900
const INTERACTIVE = 'a, button, summary, label, [role="button"]'

export default function MouseCursor() {
  const [enabled, setEnabled] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const { bites } = useFun()

  // Only for devices with a precise pointer that can hover.
  useEffect(() => {
    const query = matchMedia('(pointer: fine) and (hover: hover)')
    const update = () => setEnabled(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    const svg = svgRef.current
    if (!enabled || !root || !svg) return

    const html = document.documentElement
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    html.classList.add('has-mouse-cursor')

    let x = -100
    let y = -100
    let anchorX = x
    let anchorY = y
    let angle = REST_ANGLE
    let target = REST_ANGLE
    let frame = 0
    let settle = 0

    const render = () => {
      frame = 0
      if (!reduceMotion) {
        // Ease toward the heading along the shortest way round.
        const delta = ((target - angle + 540) % 360) - 180
        angle += delta * 0.2
        if (Math.abs(delta) > 0.5) frame = requestAnimationFrame(render)
      }
      root.style.transform = `translate(${x - HOTSPOT_X}px, ${y - HOTSPOT_Y}px)`
      svg.style.rotate = `${angle}deg`
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      x = event.clientX
      y = event.clientY
      const dx = x - anchorX
      const dy = y - anchorY
      // Ignore jitter: only turn once the pointer has really travelled.
      if (dx * dx + dy * dy > 36) {
        target = (Math.atan2(dy, dx) * 180) / Math.PI
        anchorX = x
        anchorY = y
      }
      root.dataset.visible = 'true'
      window.clearTimeout(settle)
      settle = window.setTimeout(() => {
        target = REST_ANGLE
        schedule()
      }, SETTLE_MS)
      schedule()
    }

    const onOver = (event: PointerEvent) => {
      const el = event.target as Element | null
      root.dataset.hover = String(Boolean(el?.closest?.(INTERACTIVE)))
    }
    const onDown = () => (root.dataset.pressed = 'true')
    const onUp = () => (root.dataset.pressed = 'false')
    const onLeave = () => (root.dataset.visible = 'false')

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    html.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(settle)
      html.classList.remove('has-mouse-cursor')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      html.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  // Every bite of cheese makes the mouse a little rounder.
  const plump = bites * 0.6

  return createPortal(
    <div ref={rootRef} className={styles.cursor} data-visible="false">
      <svg
        ref={svgRef}
        className={styles.mouse}
        viewBox="0 0 48 28"
        width="48"
        height="28"
        aria-hidden="true"
        style={{ transformOrigin: `${HOTSPOT_X}px ${HOTSPOT_Y}px` }}
      >
        <path
          className={styles.tail}
          d="M 5 14 C 2 10 1 6 4 3"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse
          cx="19"
          cy="14"
          rx={13 + plump}
          ry={8 + plump}
          fill="#b8b8b8"
        />
        <circle cx="27" cy="6" r="5.5" fill="#c5c5c5" />
        <circle cx="27" cy="6" r="3" fill="#f0b0b0" />
        <circle cx="27" cy="22" r="5.5" fill="#c5c5c5" />
        <circle cx="27" cy="22" r="3" fill="#f0b0b0" />
        <ellipse cx="33" cy="14" rx="8" ry="7" fill="#c8c8c8" />
        <circle className={styles.eye} cx="32" cy="10" r="1.5" />
        <circle cx="33" cy="10" r="0.5" fill="white" />
        <circle className={styles.eye} cx="32" cy="18" r="1.5" />
        <circle cx="33" cy="18" r="0.5" fill="white" />
        <g className={styles.whiskers}>
          <path d="M 39 12 L 45 8" />
          <path d="M 39 16 L 45 20" />
        </g>
        <path className={styles.nose} d="M 36 11 L 44 14 L 36 17 Z" />
      </svg>
    </div>,
    document.body,
  )
}
