import useSWR, { SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'

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
