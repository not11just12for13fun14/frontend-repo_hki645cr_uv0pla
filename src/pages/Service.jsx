import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Breadcrumbs } from '../components/Blocks'
import { SEO } from '../components/SEO'
import { BRAND, SERVICES, STATES } from '../data/siteData'
import { Link, useParams } from 'react-router-dom'

export default function Service() {
  const { serviceKey } = useParams()
  const service = SERVICES.find((s) => s.key === serviceKey)
  if (!service) return <Layout><div className="max-w-7xl mx-auto px-4 py-10">Not found</div></Layout>

  const title = `${service.name} | Authentic Mexican Desserts | Micholandia`
  const description = `${service.name} made with real fruit and premium ingredients. Available in all Minnesota & Texas stores.`

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: service.name },
  ]

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you have dairy-free options?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! We offer fruit-based paletas and sorbets that are dairy-free. Ask in-store for current options.',
          },
        },
      ],
    },
  ]

  return (
    <Layout>
      <SEO title={title} description={description} breadcrumbs={breadcrumbs} jsonld={jsonld} />
      <Hero title={service.name} subtitle="Available in all Minnesota & Texas stores" bg={service.hero} />

      <Breadcrumbs items={breadcrumbs} />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-slate-50 border">
              <img src={`https://source.unsplash.com/featured/800x600/?${encodeURIComponent(service.key)}&sig=${i}`} alt={`${service.name} ${i}`} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold">{service.name} Flavor {i}</h3>
                <p className="text-sm text-slate-600 mt-1">Real fruit. Vibrant flavors. Made fresh.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-extrabold text-[#1E3A8A] mb-3">Find {service.name} Near You</h3>
          <div className="flex flex-wrap gap-2">
            {STATES.map((state) => (
              <Link key={state.key} to={`/${state.key}/${state.cities[0].key}/${service.key}`} className="px-4 py-2 bg-[#3B82F6] text-white rounded-full hover:bg-[#2563eb]">
                {state.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
