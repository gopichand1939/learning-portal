'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CAROUSEL_IMAGES = [
  { src: '/carousel/carosoul1.png', alt: 'Dr. Lankapalli Bullayya College Golden Jubilee – Felicitation of Founder Teachers' },
  { src: '/carousel/carosoul2.png', alt: 'Dr. Lankapalli Bullayya College Golden Jubilee – Felicitation of Prominent Alumni' },
  { src: '/carousel/carosoul3.png', alt: 'Dr. Lankapalli Bullayya College Golden Jubilee Celebrations' },
]

const INTERVAL_MS = 5000

export default function HomeCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CAROUSEL_IMAGES.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const goPrev = () => setIndex((i) => (i - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  const goNext = () => setIndex((i) => (i + 1) % CAROUSEL_IMAGES.length)

  return (
    <section className="relative w-full">
      <div className="relative overflow-hidden w-full bg-gray-100">
        <div className="relative w-full min-h-[45vh] sm:min-h-[55vh] md:min-h-[65vh]">
          {CAROUSEL_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain object-center"
                sizes="100vw"
                priority={i === 0}
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Previous / Next */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 sm:left-4"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 sm:right-4"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
