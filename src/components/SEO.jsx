import React, { useEffect } from 'react'
import { BRAND } from '../data/siteData'

const strip = (s = '') => s.replace(/\s+/g, ' ').trim()

function upsertMeta(attr, key, value) {
  let el = document.head.querySelector(`${attr}[${key}]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(key, value)
    document.head.appendChild(el)
  }
  el.setAttribute('content', '') // ensure attribute exists
  return el
}

function setJsonLd(id, data) {
  let script = document.getElementById(id)
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    document.head.appendChild(script)
  }
  script.text = JSON.stringify(data, null, 2)
}

export function SEO({
  title = 'Authentic Mexican Desserts | Micholandia Ice Cream',
  description = 'Authentic Mexican desserts made with real fruit. Family-owned. Paletas, mangonadas, ice cream, and snacks in Minnesota and Texas.',
  canonical,
  breadcrumbs = [],
  jsonld = [],
}) {
  useEffect(() => {
    const canonicalUrl = canonical || `${BRAND.domain}${window.location.pathname}`

    document.title = strip(title)

    // Description
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.setAttribute('name', 'description')
      document.head.appendChild(desc)
    }
    desc.setAttribute('content', strip(description))

    // Canonical
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonicalUrl)

    // Open Graph
    const ogPairs = [
      ['og:title', strip(title)],
      ['og:description', strip(description)],
      ['og:type', 'website'],
      ['og:url', canonicalUrl],
      ['og:site_name', BRAND.name],
    ]
    ogPairs.forEach(([p, v]) => {
      let el = document.querySelector(`meta[property="${p}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', p)
        document.head.appendChild(el)
      }
      el.setAttribute('content', v)
    })

    // Twitter
    const twPairs = [
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', strip(title)],
      ['twitter:description', strip(description)],
    ]
    twPairs.forEach(([n, v]) => {
      let el = document.querySelector(`meta[name="${n}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', n)
        document.head.appendChild(el)
      }
      el.setAttribute('content', v)
    })

    // JSON-LD blocks
    setJsonLd('seo-org-jsonld', [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: BRAND.name,
        url: BRAND.domain,
      },
      ...jsonld,
    ])

    // BreadcrumbList JSON-LD
    if (breadcrumbs.length > 0) {
      setJsonLd('seo-breadcrumbs-jsonld', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((bc, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: bc.name,
          item: `${BRAND.domain}${bc.href || ''}`,
        })),
      })
    }
  }, [title, description, canonical, JSON.stringify(breadcrumbs), JSON.stringify(jsonld)])

  return null
}
