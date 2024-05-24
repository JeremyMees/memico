// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-swiper',
    'nuxt-aos',
  ],
  router: {
    options: { scrollBehaviorType: 'smooth' },
  },
  runtimeConfig: {
    imagekit: {
      publicKey: process.env.IMAGEKIT_PUBLIC,
      privateKey: process.env.IMAGEKIT_PRIVATE,
    },
  },
  tailwindcss: {
    cssPath: './assets/css/tailwind.css',
    viewer: false,
  },
  aos: {
    once: true,
    duration: 500,
  },
  eslint: {
    config: { stylistic: true },
  },
  image: {
    quality: 90,
    provider: 'imagekit',
    imagekit: { baseURL: 'https://ik.imagekit.io/c2es1qasw/Memico' },
  },
  devtools: { enabled: true },
})
