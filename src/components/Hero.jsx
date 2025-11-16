import React from 'react'

export default function Hero({ title, subtitle, bg = 'fruits', ctaLabel, ctaHref }) {
  const bgImage = {
    fruits: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1600&auto=format&fit=crop',
    milk: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1600&auto=format&fit=crop',
  }[bg] || bg

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-80" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#1E3A8A]/70" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-2xl max-w-3xl opacity-95">{subtitle}</p>}
        {ctaLabel && (
          <a href={ctaHref} className="inline-block mt-8 bg-[#F59E0B] text-[#1E3A8A] font-bold px-6 py-3 rounded-full hover:brightness-95">
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  )
}
