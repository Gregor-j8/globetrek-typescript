'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { ReactNode } from 'react'

interface AuthorizedProps {
  children: ReactNode
}

export const Authorized = ({ children }: AuthorizedProps) => {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('user')

    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [router])

  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('user')

  return isLoggedIn ? <>{children}</> : null
}
