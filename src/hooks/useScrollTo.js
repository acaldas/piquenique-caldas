import { useCallback } from "react"

const scrollToRef = ref =>
  ref.current.scrollIntoView({ behavior: "smooth", block: "nearest" })

const useScrollTo = ref => {
  const scrollTo = useCallback(() => scrollToRef(ref), [ref])
  return scrollTo
}

export default useScrollTo
