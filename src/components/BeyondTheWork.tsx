import { motion } from 'framer-motion'
import { extracurriculars } from '../data/beyondTheWork'
import { Section } from './Section'
import { CircularGallery, type GalleryItem } from './ui/circular-gallery'

export function BeyondTheWork() {
  return (
    <Section id="beyond-the-work">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white"
      >
        Beyond the Work
      </motion.h2>

      <div className="mt-12 space-y-20">
        {extracurriculars.map((entry) => {
          const galleryItems: GalleryItem[] = entry.photos.map((photo) => ({
            common: photo.caption,
            photo: { url: photo.image ?? '', text: photo.caption },
          }))

          return (
            <div key={entry.id}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
                <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{entry.subtitle}</p>
                {entry.description.map((paragraph, index) => (
                  <p key={index} className="mt-4 leading-relaxed text-slate-400">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {entry.id === 'cue-club' ? (
                <div className="relative mt-8 h-80 w-full overflow-hidden sm:h-88">
                  <CircularGallery items={galleryItems} radius={380} autoRotateSpeed={0.03} />
                </div>
              ) : (
                <div className="mt-8 flex flex-wrap gap-6">
                  {entry.photos.map((photo, index) => {
                    const tilt = index % 2 === 0 ? -6 : 6
                    return (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.85, rotate: tilt * 1.5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: tilt }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                        whileHover={{ rotate: 0, scale: 1.06 }}
                        className="w-40 sm:w-48"
                      >
                        {photo.image ? (
                          <img
                            src={photo.image}
                            alt={photo.caption}
                            className="aspect-4/5 w-full rounded-2xl object-cover shadow-xl shadow-black/30"
                          />
                        ) : (
                          <div className="flex aspect-4/5 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-slate-500 shadow-xl shadow-black/30 transition-colors hover:border-white/30 hover:text-slate-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="h-8 w-8"
                              aria-hidden="true"
                            >
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <circle cx="9" cy="9" r="1.5" />
                              <path d="m21 15-5-5-11 11" />
                            </svg>
                            <span className="text-xs">Photo placeholder</span>
                          </div>
                        )}
                        <p className="mt-2 text-center text-sm text-slate-400">{photo.caption}</p>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
