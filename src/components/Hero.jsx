import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce && videoRef.current) {
      videoRef.current.removeAttribute('autoplay')
      videoRef.current.pause()
    }
  }, [])

  return (
    <section id="top" className="relative h-[80vh] md:h-[92vh] flex items-center justify-center bg-white">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/hero.webm"
        poster="/src/assets/poster.jpg"
        autoPlay
        playsInline
        loop
        muted
      />
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-deepCoffee">Coffee with Dr. Koketso Rakhudu</h1>
        <p className="mt-4 text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto">
          A year-long consulting &amp; mentorship programme empowering social changemakers.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#apply" className="group relative inline-flex items-center rounded-2xl bg-coffeeOrange px-8 py-4 text-white font-bold shadow-strong hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 rounded-2xl bg-warmCoffee opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a href="#about" className="inline-flex items-center rounded-2xl border border-charcoal/20 px-8 py-4 font-semibold hover:border-coffeeOrange hover:text-coffeeOrange transition-colors duration-200">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
