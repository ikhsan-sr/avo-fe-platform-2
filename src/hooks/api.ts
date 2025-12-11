import useSWR, { SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import { useCallback, useEffect, useRef, useState } from 'react'

type ApiError = {
  status: number
  message: string
  data?: unknown
}

function buildUrl(input: string, base?: string) {
  if (/^https?:\/\//i.test(input)) return input
  if (base && base.length > 0) {
    const hasSlash = base.endsWith('/') || input.startsWith('/')
    return hasSlash ? `${base}${input}` : `${base}/${input}`
  }
  return input
}

export async function apiFetch<T>(input: string, init?: RequestInit & { baseUrl?: string }) {
  const url = buildUrl(input, init?.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL)
  const headers: Record<string, string> = {
    Accept: 'application/json',
    ...(init?.headers as Record<string, string>),
  }

  const body = (init as any)?.body
  const method = init?.method ?? 'GET'

  const needsJson = body !== undefined && typeof body !== 'string'
  if (needsJson) headers['Content-Type'] = headers['Content-Type'] ?? 'application/json'

  const res = await fetch(url, {
    ...init,
    method,
    headers,
    body: needsJson ? JSON.stringify(body) : body,
  })

  const contentType = res.headers.get('content-type') || ''
  const isJson = contentType.includes('application/json')

  if (!res.ok) {
    let errData: unknown
    try {
      errData = isJson ? await res.json() : await res.text()
    } catch {
      errData = undefined
    }
    const error: ApiError = {
      status: res.status,
      message: res.statusText || 'Request failed',
      data: errData,
    }
    throw error
  }

  return (isJson ? ((await res.json()) as T) : ((await res.text()) as unknown as T))
}

export function useGet<T>(path: string | null, options?: SWRConfiguration<T, ApiError>) {
  return useSWR<T, ApiError>(path, (url: string) => apiFetch<T>(url), options)
}

export function usePost<T, B = unknown>(path: string) {
  return useSWRMutation<T, ApiError, string, B>(path, async (url, { arg }) => {
    return apiFetch<T>(url, { method: 'POST', body: arg as any })
  })
}

export function usePut<T, B = unknown>(path: string) {
  return useSWRMutation<T, ApiError, string, B>(path, async (url, { arg }) => {
    return apiFetch<T>(url, { method: 'PUT', body: arg as any })
  })
}

export function usePatch<T, B = unknown>(path: string) {
  return useSWRMutation<T, ApiError, string, B>(path, async (url, { arg }) => {
    return apiFetch<T>(url, { method: 'PATCH', body: arg as any })
  })
}

export function useDelete<T, B = unknown>(path: string) {
  return useSWRMutation<T, ApiError, string, B>(path, async (url, { arg }) => {
    return apiFetch<T>(url, { method: 'DELETE', body: arg as any })
  })
}

export function usePollingGet<T>(
  path: string | null,
  options?: {
    interval?: number
    shouldStopPolling?: (data: T | undefined) => boolean
    initialLoading?: boolean
    init?: RequestInit & { baseUrl?: string }
  },
) {
  const { interval = 2000, shouldStopPolling, initialLoading = false, init } = options ?? {}
  const [data, setData] = useState<T | undefined>(undefined)
  const [error, setError] = useState<ApiError | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(Boolean(initialLoading && path))
  const intervalRef = useRef<number | null>(null)
  const mountedRef = useRef<boolean>(false)
  const prevStrRef = useRef<string>('')

  const fetchOnce = useCallback(async () => {
    if (!path) return undefined
    try {
      const res = await apiFetch<T>(path, init)
      const str = (() => {
        try {
          return JSON.stringify(res)
        } catch {
          return ''
        }
      })()
      if (mountedRef.current) {
        if (str !== prevStrRef.current) {
          setData(res)
          prevStrRef.current = str
        }
        setError(undefined)
      }
      return res
    } catch (err) {
      if (mountedRef.current) {
        setError(err as ApiError)
      }
      return undefined
    } finally {
      if (mountedRef.current) {
        setIsLoading(false)
      }
    }
  }, [path, init])

  useEffect(() => {
    mountedRef.current = true
    if (!path) {
      setIsLoading(false)
      return () => {
        mountedRef.current = false
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current as any)
          intervalRef.current = null
        }
      }
    }

    let cancelled = false
    ;(async () => {
      const res = await fetchOnce()
      if (cancelled) return
      const shouldStop = shouldStopPolling ? shouldStopPolling(res) : false
      if (shouldStop) return
      if (intervalRef.current === null) {
        intervalRef.current = (setInterval(async () => {
          try {
            const nextRes = await apiFetch<T>(path, init)
            const str = (() => {
              try {
                return JSON.stringify(nextRes)
              } catch {
                return ''
              }
            })()
            if (mountedRef.current) {
              if (str !== prevStrRef.current) {
                setData(nextRes)
                prevStrRef.current = str
              }
              setError(undefined)
            }
            if (shouldStopPolling) {
              const stop = shouldStopPolling(nextRes)
              if (stop && intervalRef.current !== null) {
                clearInterval(intervalRef.current as any)
                intervalRef.current = null
              }
            }
          } catch (err) {
            if (mountedRef.current) {
              setError(err as ApiError)
            }
          }
        }, interval) as unknown as number)
      }
    })()

    return () => {
      cancelled = true
      mountedRef.current = false
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current as any)
        intervalRef.current = null
      }
    }
  }, [path, interval, shouldStopPolling, init, fetchOnce])

  return { data, isLoading, error }
}
