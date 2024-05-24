const name = 'MEMICO'
const url = 'https://memico.be'
const description = 'Voor al uw klussen, groot en klein!'
const logo = `${url}/logo.png`

export default {
  schema: {
    organization: { name, url, logo },
    website: { name, url, description, defaultLocale: 'en' },
    modules: [
      {
        '@context': 'https://schema.org/',
        '@type': 'ContactPage',
        name,
        'url': `${url}/#contact`,
      },
    ],
  },
  meta: {
    url,
    name,
    logo,
    description,
  },
}