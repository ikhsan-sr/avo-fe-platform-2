'use client'

import React from 'react'
import { SWRConfig } from 'swr'
import { apiFetch } from '@/hooks/api'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => apiFetch(url),
        shouldRetryOnError: true,
        revalidateOnFocus: true,
        dedupingInterval: 2000,
      }}
    >
      {children}
    </SWRConfig>
  )
}
