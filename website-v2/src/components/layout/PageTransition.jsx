import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

/** Thin progress bar on client navigations only — no HMR/fade side effects. */
export default function PageTransition({ children }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    let tick
    let done

    const start = () => {
      setBusy(true)
      setProgress(20)
      clearInterval(tick)
      tick = setInterval(() => {
        setProgress((p) => (p >= 90 ? p : p + 10))
      }, 200)
    }

    const finish = () => {
      clearInterval(tick)
      setProgress(100)
      window.scrollTo(0, 0)
      done = setTimeout(() => {
        setBusy(false)
        setProgress(0)
      }, 160)
    }

    const fail = () => {
      clearInterval(tick)
      setBusy(false)
      setProgress(0)
    }

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', finish)
    router.events.on('routeChangeError', fail)

    return () => {
      clearInterval(tick)
      clearTimeout(done)
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', finish)
      router.events.off('routeChangeError', fail)
    }
  }, [router.events])

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px]"
        style={{ opacity: busy ? 1 : 0 }}
        aria-hidden
      >
        <div
          className="h-full bg-green"
          style={{ width: `${progress}%` }}
        />
      </div>
      {children}
    </>
  )
}
