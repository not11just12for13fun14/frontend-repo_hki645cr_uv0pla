import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BRAND, STATES, SERVICES } from '../data/siteData'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/catering', label: 'Catering' },
  { href: '/licensing', label: 'Licensing' },
  { href: '/events', label: 'Events' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/employment', label: 'Employment' },
  { href: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-[rgba(30,58,138,.9)] text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-extrabold text-xl md:text-2xl tracking-tight flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#F59E0B]"></span>
            Micholandia
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <NavLink key={n.href} to={n.href} className={({isActive}) => `text-sm font-semibold hover:text-[#F59E0B] ${isActive ? 'text-[#F59E0B]' : 'text-white'}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-[#1E3A8A] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">{BRAND.name}</h3>
            <p className="text-sm opacity-90">{BRAND.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              {SERVICES.map((s) => (
                <li key={s.key}><Link className="hover:text-[#F59E0B]" to={`/${s.key}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">States</h4>
            <ul className="space-y-1 text-sm">
              {STATES.map((s) => (
                <li key={s.key}><Link className="hover:text-[#F59E0B]" to={`/${s.key}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <div className="text-sm opacity-90 space-y-1">
              <a className="block hover:text-[#F59E0B]" href={BRAND.domain} target="_blank" rel="noreferrer">Website</a>
              <a className="block hover:text-[#F59E0B]" href={BRAND.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a className="block hover:text-[#F59E0B]" href={BRAND.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs py-4 bg-[#0f1f4a]">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
      </footer>
    </div>
  )
}
