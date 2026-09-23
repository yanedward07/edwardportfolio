import { PageHeader, PageShell } from '../components/PageShell'
import { CircularGallery, type GalleryItem } from '../components/ui/circular-gallery'
import { extracurriculars } from '../data/beyondTheWork'

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

export function BeyondTheWorkPage() {
  return (
    <PageShell wide>
      <div className="mx-auto max-w-5xl px-6">
        <PageHeader title="Beyond the Work" />

        <div className="space-y-24">
          {extracurriculars.map((entry) => {
            const galleryItems: GalleryItem[] = entry.photos.map((photo) => ({
              common: photo.caption,
              photo: { url: photo.image ?? '', text: photo.caption },
            }))

            return (
              <article
                key={entry.id}
                className="gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_30rem] lg:items-center"
              >
                <div>
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso-900 dark:text-oat-50">
                    {entry.title}
                  </h2>
                  <p className="mt-2 text-sm text-bark-500">{entry.subtitle}</p>
                  <div className="mt-6 space-y-5 leading-[1.75] text-bark-600 dark:text-bark-400">
                    {entry.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="relative mt-10 h-96 w-full overflow-hidden lg:mt-0">
                  <CircularGallery
                    items={galleryItems}
                    radius={GALLERY_RADIUS}
                    autoRotateSpeed={0.03}
                    {...cardSizeForCount(galleryItems.length)}
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}
