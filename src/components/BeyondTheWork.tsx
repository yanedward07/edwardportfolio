import { motion } from 'framer-motion'
import { extracurriculars } from '../data/beyondTheWork'
import { Section } from './Section'
import { CircularGallery, type GalleryItem } from './ui/circular-gallery'

// Kept constant across entries: radius controls how close the front card
// sits to the viewer (and therefore how large it appears), not just
// spacing. A shared value keeps every gallery's front photo the same
// apparent size regardless of how many photos it has — a 4-item ring
// naturally has more angular room between cards than an 8-item ring, so
// this radius stays safe from overlap either way.
const GALLERY_RADIUS = 380

// Fewer photos means each one occupies a wider slice of the ring (e.g. 90°
// apart for 4 photos vs 45° for 8), leaving visible gaps at this radius.
// Bigger cards fill that gap without changing the radius (and therefore
// without changing how large the front photo appears).
function cardSizeForCount(count: number) {
  return count <= 5
    ? { cardWidth: 260, cardHeight: 347 }
    : { cardWidth: 216, cardHeight: 288 }
}

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

              <div className="relative mt-8 h-96 w-full max-w-lg overflow-hidden">
                <CircularGallery
                  items={galleryItems}
                  radius={GALLERY_RADIUS}
                  autoRotateSpeed={0.03}
                  {...cardSizeForCount(galleryItems.length)}
                />
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
