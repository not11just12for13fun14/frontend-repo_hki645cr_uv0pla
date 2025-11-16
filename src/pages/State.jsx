import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Breadcrumbs, CTA } from '../components/Blocks'
import { SEO } from '../components/SEO'
import { STATES } from '../data/siteData'
import { Link, useParams } from 'react-router-dom'

export default function StatePage() {
  const { stateKey } = useParams()
  const state = STATES.find((s) => s.key === stateKey)
  if (!state) return <Layout><div className="max-w-7xl mx-auto px-4 py-10">Not found</div></Layout>

  const title = `${state.name} | Micholandia Locations`
  const description = `Visit Micholandia in ${state.name}. Explore cities, hours, and directions.`
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: state.name },
  ]

  return (
    <Layout>
      <SEO title={title} description={description} breadcrumbs={breadcrumbs} />
      <Hero title={`Micholandia ${state.name}`} subtitle="Find hours, menu, and directions" bg="milk" ctaLabel="Become a Licensee" ctaHref="/licensing" />
      <Breadcrumbs items={breadcrumbs} />

      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.cities.map((c) => (
          <Link key={c.key} to={`/${state.key}/${c.key}`} className="rounded-xl overflow-hidden bg-white border hover:shadow-lg transition">
            <div className="aspect-video bg-slate-100">
              <img src={`https://source.unsplash.com/featured/800x600/?city,${encodeURIComponent(c.name)}`} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{c.name}</h3>
              <p className="text-sm text-slate-600">{c.address}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="rounded-xl overflow-hidden">
          <iframe title="Map" src={`https://www.google.com/maps?q=${encodeURIComponent(state.name)}&output=embed`} className="w-full h-96 border-0" loading="lazy"></iframe>
        </div>
      </section>

      <CTA title="Become a Licensee" subtitle="Bring Micholandia to your city" href="/licensing" />
    </Layout>
  )
}
