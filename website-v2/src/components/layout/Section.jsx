import { useEffect, useRef, useState } from 'react'

/**
 * Layered section background:
 * - Photo scrolls with the section
 * - Overlay sits on top
 * - Non-hero images stay hidden until near viewport (opacity only — URL is stable for hydration)
 */
export default function Section({
  children,
  background,
  className = '',
  id,
  eager = false,
}) {
  const scene =
    background && typeof background === 'object' ? background : null
  const legacy =
    typeof background === 'string' ? background : undefined
  const shouldEager = eager || Boolean(scene?.eager)
  const [visible, setVisible] = useState(shouldEager || !scene?.image)
  const ref = useRef(null)

  useEffect(() => {
    if (!scene?.image || shouldEager) {
      setVisible(true)
      return undefined
    }

    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '280px 0px', threshold: 0.01 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [scene?.image, shouldEager])

  const overlayStyle = scene?.overlay
    ? { background: scene.overlay }
    : undefined

  return (
    <section
      ref={ref}
      id={id}
      className={`relative overflow-hidden px-8 ${className}`}
      style={
        legacy
          ? { background: legacy }
          : scene && !scene.image
            ? { background: scene.overlay }
            : scene?.image
              ? { backgroundColor: '#072F4C' }
              : undefined
      }
    >
      {scene?.image ? (
        <>
          <div
            className={`pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${scene.image}')` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={overlayStyle}
            aria-hidden
          />
        </>
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-site">{children}</div>
    </section>
  )
}
