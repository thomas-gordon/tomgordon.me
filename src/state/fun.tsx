import { createContext, useCallback, useContext, useState } from 'react'
import type { PropsWithChildren } from 'react'

/** Bites it takes the mouse to finish the cheese. */
export const CHEESE_BITES = 4

type Fun = {
  bites: number
  cheeseEaten: boolean
  bite: () => void
}

const FunContext = createContext<Fun>({
  bites: 0,
  cheeseEaten: false,
  bite: () => undefined,
})

/** Shared state for the page's easter eggs (currently: feeding the mouse). */
export function FunProvider({ children }: PropsWithChildren) {
  const [bites, setBites] = useState(0)
  const bite = useCallback(
    () => setBites(b => Math.min(CHEESE_BITES, b + 1)),
    [],
  )

  return (
    <FunContext value={{ bites, cheeseEaten: bites >= CHEESE_BITES, bite }}>
      {children}
    </FunContext>
  )
}

export const useFun = () => useContext(FunContext)
