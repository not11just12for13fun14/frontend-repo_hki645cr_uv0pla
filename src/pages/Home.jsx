import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { IconGrid, LocationStrip, CTA } from '../components/Blocks'
import { SEO } from '../components/SEO'
import { BRAND } from '../data/siteData'

export default function Home() {
  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: BRAND.name,
      url: BRAND.domain,
      sameAs: [BRAND.social.instagram, BRAND.social.facebook],
    },
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
      <SEO
        title="Authentic Mexican Desserts | Micholandia Ice Cream"
        description="Authentic Mexican desserts made with real fruit. Family-friendly stores in Minnesota and Texas. Paletas, mangonadas, ice cream, snacks, and more."
        breadcrumbs={[{ name: 'Home', href: '/' }]}
        jsonld={jsonld}
      />
      <Hero
        title="Authentic Mexican Desserts"
        subtitle="Paletas • Mangonadas • Ice Cream • Snacks"
        bg="fruits"
        ctaLabel="View Menu"
        ctaHref="/menu"
      />
      <IconGrid />
      <LocationStrip />
      <CTA />
    </Layout>
  )
}
