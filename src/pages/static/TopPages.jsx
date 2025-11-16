import React from 'react'
import StaticPage from '../Static'

export function AboutPage() {
  return (
    <StaticPage title="About" subtitle="Our story: authentic Mexican desserts, made fresh">
      <p>Micholandia Ice Cream celebrates the flavors of Mexico with handcrafted paletas, mangonadas, ice cream, and snacks. We use real fruit and premium ingredients to create bold, memorable treats everyone can enjoy.</p>
      <p>From our beginnings as a family passion to our growing presence in Minnesota and Texas, our mission remains the same: share joy through authentic desserts.</p>
    </StaticPage>
  )
}

export function MenuPage() {
  return (
    <StaticPage title="Menu" subtitle="Paletas, mangonadas, ice cream, snacks, and more">
      <ul>
        <li>Paletas de Fruta – Strawberry, Mango, Watermelon, Kiwi, and more</li>
        <li>Paletas de Crema – Coconut, Pistachio, Cookies & Cream</li>
        <li>Mangonadas – Mango sorbet, chamoy, tajín, fresh mango</li>
        <li>Ice Cream – Classic and seasonal flavors</li>
        <li>Snacks – Tostilocos, Fruit Cups, Corn Cups (Elotes/Esquites)</li>
        <li>Shakes & Drinks – Licuados, Fresas con Crema, Specialty Drinks</li>
      </ul>
    </StaticPage>
  )
}

export function LocationsPage() {
  return (
    <StaticPage title="Locations" subtitle="Find us in Minnesota and Texas">
      <p>Visit our locations across Minnesota and Texas. See hours, menu, and directions on each city page.</p>
      <p><a href="/minnesota">Minnesota</a> • <a href="/texas">Texas</a></p>
    </StaticPage>
  )
}

export function CateringPage() {
  return (
    <StaticPage title="Catering" subtitle="Bring Micholandia to your next event">
      <p>From birthdays to corporate events, we offer dessert catering your guests will love. Choose from paletas bars, mangonada stations, and custom ice cream setups.</p>
      <p><a href="/contact">Contact us</a> to book your date.</p>
    </StaticPage>
  )
}

export function LicensingPage() {
  return (
    <StaticPage title="Licensing" subtitle="Open a Micholandia in your city">
      <p>We partner with passionate operators to bring authentic Mexican desserts to new communities. Learn about licensing opportunities and requirements.</p>
      <p><a href="/contact">Start the conversation</a>.</p>
    </StaticPage>
  )
}

export function EventsPage() {
  return (
    <StaticPage title="Events" subtitle="Pop-ups, festivals, and community gatherings">
      <p>See us at local events across Minnesota and Texas. Follow our social channels for the latest schedule.</p>
    </StaticPage>
  )
}

export function WholesalePage() {
  return (
    <StaticPage title="Wholesale" subtitle="Stock Micholandia desserts at your business">
      <p>We supply paletas, ice cream, and desserts to grocery and foodservice partners. Get in touch for pricing and delivery options.</p>
    </StaticPage>
  )
}

export function EmploymentPage() {
  return (
    <StaticPage title="Employment" subtitle="Join the Micholandia family">
      <p>We’re always looking for friendly, motivated team members. Flexible schedules, fun environment, and employee treats!</p>
      <p><a href="/contact">Apply now</a>.</p>
    </StaticPage>
  )
}

export function ContactPage() {
  return (
    <StaticPage title="Contact" subtitle="We’d love to hear from you">
      <p>Email: hello@micholandia.com</p>
      <p>For catering and licensing inquiries, please include your city and preferred dates.</p>
      <p>
        Minnesota: <a href="/minnesota">Find locations</a> • Texas: <a href="/texas">Find locations</a>
      </p>
    </StaticPage>
  )
}
