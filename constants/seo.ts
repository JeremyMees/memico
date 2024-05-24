const name = 'MEMICO'
const url = 'https://memico.be'
const description = 'Voor al uw klussen, groot en klein! Ons ervaren team staat klaar voor alles, van kleine reparaties tot grootschalige renovaties. Kwaliteit verzekerd!'
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
