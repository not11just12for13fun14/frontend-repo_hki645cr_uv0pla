import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Breadcrumbs } from '../components/Blocks'
import { SEO } from '../components/SEO'
import { STATES, SERVICES } from '../data/siteData'
import { Link, useParams } from 'react-router-dom'

export default function CityPage() {
  const { stateKey, cityKey } = useParams()
  const state = STATES.find((s) => s.key === stateKey)
  const city = state?.cities.find((c) => c.key === cityKey)
  if (!city) return <Layout><div className="max-w-7xl mx-auto px-4 py-10">Not found</div></Layout>

  const title = `Micholandia ${city.name} – Hours, Menu, Directions`
  const description = `Visit Micholandia in ${city.name}, ${state.name}. Enjoy authentic Mexican desserts made with real fruit. See hours, menu, and directions.`
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: state.name, href: `/${state.key}` },
    { name: city.name },
  ]

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `Micholandia ${city.name}`,
      address: city.address,
      telephone: city.phone,
      url: `https://micholandia.com/${state.key}/${city.key}`,
    },
  ]

  return (
    <Layout>
      <SEO title={title} description={description} breadcrumbs={breadcrumbs} jsonld={jsonld} />
      <Hero title={`Micholandia ${city.name}`} subtitle={`${city.address} • ${city.hours}`} bg={city.photos?.[0] || 'milk'} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-xl overflow-hidden">
            <iframe title="Map" src={city.mapEmbed} className="w-full h-72 border-0" loading="lazy"></iframe>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {(city.photos || []).map((p, i) => (
              <img key={i} src={`https://source.unsplash.com/featured/800x600/?dessert&sig=${i}`} alt="Dessert" className="rounded-lg" loading="lazy" />
            ))}
          </div>
        </div>
        <aside className="space-y-4">
          <div className="p-4 rounded-xl border bg-white">
            <h3 className="font-bold text-lg">Info</h3>
            <p className="text-sm">Address: {city.address}</p>
            <p className="text-sm">Hours: {city.hours}</p>
            <a href={`tel:${city.phone}`} className="text-sm text-[#1E3A8A] font-semibold block mt-2">Call {city.phone}</a>
          </div>
          <div className="p-4 rounded-xl border bg-white">
            <h4 className="font-bold mb-2">Menu & Services</h4>
            <div className="flex flex-wrap gap-2">
              {SERVICES.filter(s => s.key !== 'specialties').map((s) => (
                <Link key={s.key} to={`/${state.key}/${city.key}/${s.key}`} className="px-3 py-1.5 rounded-full bg-[#3B82F6] text-white text-sm hover:bg-[#2563eb]">{s.name}</Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </Layout>
  )
}
