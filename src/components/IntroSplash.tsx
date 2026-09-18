import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { AuroraBackground } from './ui/aurora-background'

const SESSION_KEY = 'intro-shown'
const AUTO_DISMISS_MS = 2500

function playRevealChime() {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new Ctx()
    const now = ctx.currentTime

    const playTone = (freq: number, start: number, duration: number) => {
      const oscillator = ctx.createOscillator()
      const gain = ctx.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.value = freq
      gain.gain.setValueAtTime(0, now + start)
      gain.gain.linearRampToValueAtTime(0.2, now + start + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.001, now + start + duration)
      oscillator.connect(gain)
      gain.connect(ctx.destination)
      oscillator.start(now + start)
      oscillator.stop(now + start + duration)
    }

    playTone(220, 0, 0.18)
    playTone(440, 0.16, 0.22)
  } catch {
    // Autoplay blocked or Web Audio unsupported — silently skip the chime.
  }
}

export function IntroSplash() {
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY) !== '1',
  )

  useEffect(() => {
    if (!visible) return

    document.body.style.overflow = 'hidden'
    playRevealChime()

    const timer = setTimeout(() => dismiss(), AUTO_DISMISS_MS)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  function dismiss() {
    document.body.style.overflow = ''
    sessionStorage.setItem(SESSION_KEY, '1')
    setVisible(false)
  }

  function handleSkip() {
    playRevealChime()
    dismiss()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          onClick={handleSkip}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
          className="fixed inset-0 z-100 flex cursor-pointer items-center justify-center overflow-hidden bg-slate-950"
        >
          <AuroraBackground aria-hidden="true" className="pointer-events-none absolute inset-0" />

          <motion.h1
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ scale: 12, opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative text-4xl font-bold tracking-wide text-white sm:text-6xl"
          >
            Edward Yan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-10 text-xs uppercase tracking-[0.3em] text-slate-500"
          >
            Tap to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
