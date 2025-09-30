import React from 'react'
import { Quote } from 'lucide-react'

export default function AboutDoctor() {
  return (
    <section id="about" className="reveal py-20 bg-gradient-to-br from-white via-cream-50 to-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-coffeeOrange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-deepCoffee/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-coffeeOrange to-warmCoffee rounded-3xl blur opacity-20"></div>

            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-strong bg-white">
              <img
                src="/dr-koketso.jpg"
                alt="Dr. Koketso Rakhudu"
                className="w-full aspect-[4/5] object-cover object-center"
                loading="eager"
                decoding="sync"
                style={{
                  imageRendering: 'high-quality',
                  filter: 'contrast(1.15) brightness(1.08) saturate(1.05)',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-strong border border-cream">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-coffeeOrange to-warmCoffee rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-deepCoffee">Programme Leader</p>
                  <p className="text-sm text-charcoal/70">& Mentor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-coffee-gradient bg-clip-text text-transparent mb-4">
                Meet Dr. Koketso Rakhudu
              </h2>
              <div className="w-24 h-1 bg-orange-gradient rounded-full mb-6"></div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-charcoal/80 leading-relaxed">
                A visionary leader and social impact expert dedicated to empowering changemakers across Africa and beyond.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-cream shadow-soft">
                  <h3 className="font-bold text-deepCoffee mb-2">Expertise</h3>
                  <p className="text-charcoal/70">Social innovation, community development, and sustainable impact strategies</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-cream shadow-soft">
                  <h3 className="font-bold text-deepCoffee mb-2">Mission</h3>
                  <p className="text-charcoal/70">Bridging the gap between ideas and actionable, sustainable social change</p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative bg-gradient-to-r from-deepCoffee to-warmCoffee rounded-2xl p-8 text-white overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/src/assets/slow-alpha.webm" type="video/webm" />
                </video>
                <Quote className="absolute top-4 left-4 w-8 h-8 text-coffeeOrange/50 z-10" />
                <blockquote className="relative z-10 text-lg font-medium italic pl-8">
                  "True impact happens when passion meets purpose, strategy meets action, and individual vision becomes collective change."
                </blockquote>
                <cite className="relative z-10 block mt-4 text-right text-cream/80 font-semibold">
                  — Dr. Koketso Rakhudu
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}