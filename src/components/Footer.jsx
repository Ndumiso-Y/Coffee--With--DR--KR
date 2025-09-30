import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-charcoal text-cream py-10 mt-10 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/src/assets/slow-alpha.webm" type="video/webm" />
      </video>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="text-sm text-cream/80">
          © {year} Coffee with Dr. Koketso Rakhudu — Designed by Embark Digitals
        </div>
        <nav className="flex items-center gap-6 text-cream/90">
          <a href="#top" className="hover:text-coffeeOrange transition-colors">Home</a>
          <a href="#about" className="hover:text-coffeeOrange transition-colors">About</a>
          <a href="#framework" className="hover:text-coffeeOrange transition-colors">Framework</a>
          <a href="#apply" className="hover:text-coffeeOrange transition-colors">Apply</a>
        </nav>
      </div>
    </footer>
  )
}
