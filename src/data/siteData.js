// Data model for Micholandia Ice Cream multi-location site
export const BRAND = {
  name: 'Micholandia Ice Cream',
  domain: 'https://micholandia.com',
  tagline: 'Authentic Mexican Desserts • Paletas • Mangonadas • Ice Cream • Snacks',
  colors: {
    primary: '#1E3A8A',
    secondary: '#3B82F6',
    accent: '#F59E0B',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  },
}

export const SERVICES = [
  { key: 'popsicles', name: 'Popsicles (Paletas)', description: 'Handcrafted paletas made with real fruit, creamy milk, and bold Mexican flavors.', hero: '/images/paletas.jpg' },
  { key: 'ice-cream', name: 'Ice Cream', description: 'Small-batch ice cream with classic and adventurous flavors inspired by Mexico.', hero: '/images/ice-cream.jpg' },
  { key: 'mangonadas', name: 'Mangonadas', description: 'Sweet, tangy, and spicy — mango sorbet with chamoy, tajín, and fresh mango.', hero: '/images/mangonada.jpg' },
  { key: 'shakes-drinks', name: 'Shakes & Drinks', description: 'Creamy licuados, fresas con crema, and refreshing specialty beverages.', hero: '/images/shakes.jpg' },
  { key: 'fruit-water', name: 'Fruit Water (Aguas Frescas)', description: 'Naturally refreshing aguas frescas made with real fruit.', hero: '/images/aguas.jpg' },
  { key: 'snacks', name: 'Snacks', description: 'Loaded snacks like tostilocos, fruit cups, and more.', hero: '/images/snacks.jpg' },
  { key: 'corn-cups', name: 'Corn Cups (Elotes/Esquites)', description: 'Street-style corn cups with crema, queso, lime, and a little heat.', hero: '/images/corn.jpg' },
  { key: 'specialties', name: 'Specialties', description: 'Seasonal desserts and signature creations you won’t find anywhere else.', hero: '/images/specialties.jpg' },
]

export const STATES = [
  {
    key: 'minnesota',
    name: 'Minnesota',
    cities: [
      {
        key: 'hilltop',
        name: 'Hilltop',
        address: '123 Central Ave NE, Hilltop, MN',
        phone: '(555) 555-0101',
        hours: 'Mon–Sun 11:00 AM – 10:00 PM',
        mapEmbed: 'https://www.google.com/maps?q=Hilltop+MN&output=embed',
        photos: ['/images/store-mn-1.jpg', '/images/products-1.jpg'],
      },
      {
        key: 'blaine',
        name: 'Blaine',
        address: '456 Northtown Dr NE, Blaine, MN',
        phone: '(555) 555-0102',
        hours: 'Mon–Sun 11:00 AM – 10:00 PM',
        mapEmbed: 'https://www.google.com/maps?q=Blaine+MN&output=embed',
        photos: ['/images/store-mn-2.jpg', '/images/products-2.jpg'],
      },
    ],
  },
  {
    key: 'texas',
    name: 'Texas',
    cities: [
      { key: 'fort-worth', name: 'Fort Worth', address: '101 Main St, Fort Worth, TX', phone: '(555) 555-0201', hours: 'Daily 11:00 AM – 10:00 PM', mapEmbed: 'https://www.google.com/maps?q=Fort+Worth+TX&output=embed', photos: ['/images/store-tx-1.jpg'] },
      { key: 'keller', name: 'Keller', address: '202 Pine St, Keller, TX', phone: '(555) 555-0202', hours: 'Daily 11:00 AM – 10:00 PM', mapEmbed: 'https://www.google.com/maps?q=Keller+TX&output=embed', photos: ['/images/store-tx-2.jpg'] },
      { key: 'richardson', name: 'Richardson', address: '303 Oak St, Richardson, TX', phone: '(555) 555-0203', hours: 'Daily 11:00 AM – 10:00 PM', mapEmbed: 'https://www.google.com/maps?q=Richardson+TX&output=embed', photos: ['/images/store-tx-3.jpg'] },
      { key: 'round-rock', name: 'Round Rock', address: '404 Elm St, Round Rock, TX', phone: '(555) 555-0204', hours: 'Daily 11:00 AM – 10:00 PM', mapEmbed: 'https://www.google.com/maps?q=Round+Rock+TX&output=embed', photos: ['/images/store-tx-4.jpg'] },
    ],
  },
]

export const ALL_CITIES = STATES.flatMap((s) => s.cities.map((c) => ({ ...c, stateKey: s.key, stateName: s.name })))

export const CITY_PATHS = ALL_CITIES.map((c) => `/${c.stateKey}/${c.key}`)

export const LOCAL_SERVICE_PATHS = ALL_CITIES.flatMap((c) =>
  SERVICES.filter(s => s.key !== 'specialties').map((srv) => `/${c.stateKey}/${c.key}/${srv.key}`)
)
