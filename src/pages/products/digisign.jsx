import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function DigiSignRedirect() {
  const router = useRouter()
  useEffect(() => { router.replace('/products/certysign') }, [])
  return null
}

export async function getServerSideProps() {
  return { redirect: { destination: '/products/certysign', permanent: true } }
}
