<template>
  <div class="min-h-screen flex flex-col">
    <Navigation />
    <Hero />
    <main class="relative grow py-[120px] flex flex-col gap-[120px] overflow-hidden">
      <Services />
      <Projects />
      <ImageText />
      <!-- <Reviews /> -->
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import config from '@/constants/seo'

const {
  url,
  name,
  logo,
  description,
} = config.meta

const head = computed(() => ({
  titleTemplate: () => name,
  name,
  link: [
    {
      rel: 'canonical',
      href: url,
    },
  ],
  meta: [
    {
      id: 'description',
      name: 'description',
      content: description,
    },
    {
      id: 'robots',
      name: 'robots',
      content: 'index,follow',
    },
    {
      id: 'twitter:title',
      name: 'twitter:title',
      content: name,
    },
    {
      id: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      id: 'twitter:image',
      name: 'twitter:image',
      content: logo,
    },
    {
      id: 'og:image',
      property: 'og:image',
      content: logo,
    },
    {
      id: 'og:title',
      property: 'og:title',
      content: name,
    },
    {
      id: 'og:description',
      property: 'og:description',
      content: description,
    },
  ],
}))

useHead(head.value)

useSchemaOrg([defineWebPage({ name, url })])
</script>
