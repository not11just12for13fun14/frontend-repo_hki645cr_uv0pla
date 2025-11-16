import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Breadcrumbs } from '../components/Blocks'
import { SEO } from '../components/SEO'
import { STATES, SERVICES } from '../data/siteData'
import { Link, useParams } from 'react-router-dom'

export default function LocalService() {
  const { stateKey, cityKey, serviceKey } = useParams()
  const state = STATES.find((s) => s.key === stateKey)
  const city = state?.cities.find((c) => c.key === cityKey)
  const service = SERVICES.find((s) => s.key === serviceKey)
  if (!city || !service) return <Layout><div className="max-w-7xl mx-auto px-4 py-10">Not found</div></Layout>

  const title = `${service.name} in ${city.name}, ${state.name} | Micholandia`
  const description = `${service.name} in ${city.name}, ${state.name}. Real fruit ingredients. Family-friendly treats.`
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: state.name, href: `/${state.key}` },
    { name: city.name, href: `/${state.key}/${city.key}` },
    { name: service.name },
  ]

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you take catering orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer catering for events. Please see our catering page to book your event.',
          },
        },
      ],
    },
  ]

  return (
    <Layout>
      <SEO title={title} description={description} breadcrumbs={breadcrumbs} jsonld={jsonld} />
      <Hero title={`${service.name} in ${city.name}`} subtitle="Made fresh with real fruit and bold flavors" bg={service.hero} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-slate-700 max-w-3xl">Enjoy {service.name.toLowerCase()} at our {city.name} location. We craft every treat with fresh, real fruit and time-honored recipes. Visit us today or call to ask about today’s flavors!</p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[1,2,3,4,5,6].map((i) => (
            <img key={i} src={`https://source.unsplash.com/featured/800x600/?${encodeURIComponent(service.key)},dessert&sig=${i}`} alt={`${service.name} ${i}`} className="rounded-xl w-full h-48 object-cover" loading="lazy" />
          ))}
        </div>

        <div className="mt-8 flex gap-3 flex-wrap">
          <Link to={`/${state.key}/${city.key}`} className="px-4 py-2 bg-[#3B82F6] text-white rounded-full hover:bg-[#2563eb]">Back to {city.name}</Link>
          <Link to={`/${service.key}`} className="px-4 py-2 bg-[#F59E0B] text-[#1E3A8A] rounded-full font-bold hover:brightness-95">Explore {service.name}</Link>
        </div>
      </section>
    </Layout>
  )
}
