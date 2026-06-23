import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CertySignRedirect() {
  const router = useRouter()
  useEffect(() => { router.replace('/products/certysign') }, [router])
  return null
}
