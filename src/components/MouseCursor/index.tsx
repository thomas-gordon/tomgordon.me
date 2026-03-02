import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.css'

// Nose tip (the vertex of the triangular snout) sits at (44, 14).
// We offset the element so that point coincides with the real cursor.
const HOTSPOT_X = 44
const HOTSPOT_Y = 14

export default function MouseCursor() {
  const [mounted, setMounted] = useState(false)
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div
      className={styles.cursor}
      style={{
        transform: `translate(${pos.x - HOTSPOT_X}px, ${pos.y - HOTSPOT_Y}px)`,
      }}
    >
      <svg
        viewBox="0 0 48 28"
        width="48"
        height="28"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          overflow: 'visible',
          transformOrigin: `${HOTSPOT_X}px ${HOTSPOT_Y}px`,
          transform: 'rotate(-120deg)',
        }}
      >
        {/* tail */}
        <path
          d="M 5 14 C 2 10 1 6 4 3"
          stroke="#999"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* body */}
        <ellipse cx="19" cy="14" rx="13" ry="8" fill="#b8b8b8" />
        {/* ears */}
        <circle cx="27" cy="6" r="5.5" fill="#c5c5c5" />
        <circle cx="27" cy="6" r="3" fill="#f0b0b0" />
        <circle cx="27" cy="22" r="5.5" fill="#c5c5c5" />
        <circle cx="27" cy="22" r="3" fill="#f0b0b0" />
        {/* head */}
        <ellipse cx="33" cy="14" rx="8" ry="7" fill="#c8c8c8" />
        {/* eyes */}
        <circle cx="32" cy="10" r="1.5" fill="#111" />
        <circle cx="33" cy="10" r="0.5" fill="white" />
        <circle cx="32" cy="18" r="1.5" fill="#111" />
        <circle cx="33" cy="18" r="0.5" fill="white" />
        {/* nose — pointed triangle, vertex at (44, 14) = hotspot */}
        <path d="M 36 11 L 44 14 L 36 17 Z" fill="#e07070" />
      </svg>
    </div>,
    document.body,
  )
}
