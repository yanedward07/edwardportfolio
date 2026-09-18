import { cn } from '@/lib/utils'

interface YouTubeEmbedProps {
  /** YouTube video ID, e.g. "I19i90SXWs8" (the part after /embed/ or v= in the URL). */
  videoId: string
  title?: string
  /** CSS aspect-ratio value. Defaults to 16 / 9. */
  aspectRatio?: string
  className?: string
}

export function YouTubeEmbed({
  videoId,
  title,
  aspectRatio = '16 / 9',
  className,
}: YouTubeEmbedProps) {
  return (
    <div
      className={cn('relative w-full overflow-hidden rounded-lg bg-black', className)}
      style={{ aspectRatio }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}
