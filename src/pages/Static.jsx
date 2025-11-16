import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Breadcrumbs, CTA } from '../components/Blocks'
import { SEO } from '../components/SEO'

export default function StaticPage({ title, path, subtitle, children }) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: title },
  ]

  return (
    <Layout>
      <SEO title={`${title} | Micholandia Ice Cream`} description={`Learn about ${title} at Micholandia Ice Cream.`} breadcrumbs={breadcrumbs} />
      <Hero title={title} subtitle={subtitle} bg="milk" />
      <Breadcrumbs items={breadcrumbs} />
      <section className="max-w-5xl mx-auto px-4 py-10 prose prose-slate">
        {children}
      </section>
      <CTA />
    </Layout>
  )
}
