import React from 'react'
import { Link } from 'react-router-dom'
import { SERVICES, STATES } from '../data/siteData'

export function IconGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A8A]">Explore Our Desserts</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {SERVICES.map((s) => (
          <Link key={s.key} to={`/${s.key}`} className="group rounded-xl border border-slate-200 p-5 hover:shadow-lg transition bg-white">
            <div className="aspect-video rounded-lg overflow-hidden bg-slate-100">
              <img src={`https://source.unsplash.com/featured/800x600/?${encodeURIComponent(s.key)}`} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" />
            </div>
            <h3 className="mt-4 font-bold text-lg">{s.name}</h3>
            <p className="text-sm text-slate-600 mt-1">{s.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function LocationStrip() {
  return (
    <section className="bg-[#EFF6FF] py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-xl md:text-2xl font-extrabold text-[#1E3A8A]">Find a Micholandia near you</h3>
        <div className="flex gap-3 flex-wrap">
          {STATES.map((s) => (
            <Link key={s.key} to={`/${s.key}`} className="px-4 py-2 bg-[#3B82F6] text-white rounded-full hover:bg-[#2563eb]">{s.name}</Link>
          ))}
          <Link to="/locations" className="px-4 py-2 bg-[#F59E0B] text-[#1E3A8A] rounded-full font-bold hover:brightness-95">All Locations</Link>
        </div>
      </div>
    </section>
  )
}

export function CTA({ title = 'Book Catering', subtitle = 'Bring Micholandia to your next event', href = '/catering' }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <div className="rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] px-6 py-12 text-white">
        <h3 className="text-2xl md:text-3xl font-extrabold">{title}</h3>
        <p className="mt-2 opacity-95">{subtitle}</p>
        <a href={href} className="inline-block mt-6 bg-[#F59E0B] text-[#1E3A8A] font-bold px-6 py-3 rounded-full hover:brightness-95">Get a Quote</a>
      </div>
    </section>
  )
}

export function Breadcrumbs({ items }) {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-3 text-sm" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-slate-600">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {idx > 0 && <span>/</span>}
            {it.href ? <Link to={it.href} className="hover:text-[#1E3A8A]">{it.name}</Link> : <span className="text-slate-900">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
