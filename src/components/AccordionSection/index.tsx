import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import styles from './styles.module.css'

type Props = {
  heading: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function AccordionSection({
  heading,
  children,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen)
  const { ref, inView } = useInView()

  return (
    <div ref={ref as React.Ref<HTMLDivElement>}>
      <button
        className={`${styles.heading} ${inView ? 'animate-in' : 'pre-animate'}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {heading}
        <span className={`${styles.chevron} ${open ? styles.open : ''}`}>
          ▾
        </span>
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  )
}
