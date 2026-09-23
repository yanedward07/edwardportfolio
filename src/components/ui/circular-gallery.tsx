import React, { useCallback, useEffect, useRef, useState } from 'react'
import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export interface GalleryItem {
  common: string
  binomial?: string
  photo: {
    url: string
    text: string
    pos?: string
    by?: string
  }
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[]
  /** Controls how far the items are from the center (and how large the front item appears). */
  radius?: number
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number
  /** Card size in px. Larger cards help fill the gaps in a ring with few items. */
  cardWidth?: number
  cardHeight?: number
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius = 600,
      autoRotateSpeed = 0.02,
      cardWidth = 216,
      cardHeight = 288,
      ...props
    },
    ref,
  ) => {
    const [rotation, setRotation] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const animationFrameRef = useRef<number | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }
      },
      [ref],
    )

    // Rotate on scroll/trackpad input over the gallery itself, without
    // scrolling the page — move the cursor off the gallery to keep
    // scrolling normally. Needs a native (non-passive) listener since
    // React's onWheel is passive by default and can't preventDefault.
    useEffect(() => {
      const el = containerRef.current
      if (!el) return

      const handleWheel = (event: WheelEvent) => {
        event.preventDefault()
        setIsScrolling(true)
        setRotation((prev) => prev + event.deltaY * 0.15)

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false)
        }, 150)
      }

      el.addEventListener('wheel', handleWheel, { passive: false })
      return () => {
        el.removeEventListener('wheel', handleWheel)
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
      }
    }, [])

    // Idle auto-rotation when the page isn't being scrolled.
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) {
          setRotation((prev) => prev + autoRotateSpeed)
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate)
      }

      animationFrameRef.current = requestAnimationFrame(autoRotate)

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }, [isScrolling, autoRotateSpeed])

    const anglePerItem = 360 / items.length

    return (
      <div
        ref={setRefs}
        role="region"
        aria-label="Circular 3D gallery, scroll to rotate"
        className={cn('relative flex h-full w-full items-center justify-center', className)}
        style={{ perspective: '2000px', touchAction: 'none' }}
        {...props}
      >
        <div
          className="relative h-full w-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem
            const totalRotation = rotation % 360
            const relativeAngle = (itemAngle + totalRotation + 360) % 360
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle)
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180)

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: -cardWidth / 2,
                  marginTop: -cardHeight / 2,
                  opacity,
                  transition: 'opacity 0.3s linear',
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-black/10 bg-black/5 shadow-2xl backdrop-blur-lg dark:border-white/10 dark:bg-white/5">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-4 text-white">
                    <h3 className="text-xl font-bold">{item.common}</h3>
                    {item.binomial && (
                      <em className="text-sm italic opacity-80">{item.binomial}</em>
                    )}
                    {item.photo.by && (
                      <p className="mt-2 text-xs opacity-70">Photo by: {item.photo.by}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)

CircularGallery.displayName = 'CircularGallery'

export { CircularGallery }
