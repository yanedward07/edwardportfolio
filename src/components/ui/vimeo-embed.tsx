import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

declare global {
  interface Window {
    Vimeo?: {
      Player: new (
        element: HTMLElement,
        options: Record<string, unknown>,
      ) => {
        ready: () => Promise<void>
        destroy: () => Promise<void>
      }
    }
  }
}

const VIMEO_PLAYER_SCRIPT_SRC = 'https://player.vimeo.com/api/player.js'

// Module-scoped so every VimeoEmbed instance on the page shares one script
// load, no matter how many mount (e.g. several video slots in a grid).
let vimeoScriptPromise: Promise<void> | null = null

function loadVimeoPlayerScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.Vimeo?.Player) return Promise.resolve()
  if (vimeoScriptPromise) return vimeoScriptPromise

  vimeoScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${VIMEO_PLAYER_SCRIPT_SRC}"]`,
    )
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () =>
        reject(new Error('Failed to load the Vimeo player script')),
      )
      return
    }

    const script = document.createElement('script')
    script.src = VIMEO_PLAYER_SCRIPT_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load the Vimeo player script'))
    document.head.appendChild(script)
  })

  return vimeoScriptPromise
}

interface VimeoEmbedProps {
  /** Vimeo video ID, e.g. "1115216100". */
  videoId: string
  /** Privacy hash from the share link, e.g. "4d84f6d81e" in vimeo.com/123/4d84f6d81e. Omit for fully public videos. */
  hash?: string
  title?: string
  /** CSS aspect-ratio value. Defaults to 16 / 9. */
  aspectRatio?: string
  className?: string
}

export function VimeoEmbed({
  videoId,
  hash,
  title,
  aspectRatio = '16 / 9',
  className,
}: VimeoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false
    let player: { ready: () => Promise<void>; destroy: () => Promise<void> } | null = null

    setStatus('loading')

    loadVimeoPlayerScript()
      .then(() => {
        if (cancelled) return
        if (!containerRef.current || !window.Vimeo) {
          throw new Error('Vimeo player unavailable')
        }
        player = new window.Vimeo.Player(containerRef.current, {
          id: videoId,
          ...(hash ? { h: hash } : {}),
          responsive: true,
          title: false,
          byline: false,
          portrait: false,
        })
        // The constructor resolves synchronously even when the video fails
        // to load — only `ready()` confirms Vimeo actually connected it.
        return player.ready()
      })
      .then(() => {
        if (!cancelled) setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
      player?.destroy()
    }
  }, [videoId, hash])

  return (
    <div
      className={cn('relative w-full overflow-hidden rounded-lg bg-black', className)}
      style={{ aspectRatio }}
    >
      <div ref={containerRef} className="absolute inset-0" aria-label={title} />
      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center px-2 text-center text-xs text-slate-500">
          Video unavailable
        </div>
      )}
    </div>
  )
}
