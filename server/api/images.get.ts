import ImageKit from 'imagekit'

export default defineEventHandler(async () => {
  const { publicKey, privateKey } = useRuntimeConfig().imagekit

  const imagekit = new ImageKit({
    urlEndpoint: 'https://ik.imagekit.io/c2es1qasw',
    privateKey,
    publicKey,
  })

  const images = await imagekit.listFiles({ path: '/Memico/Realisaties' })

  return images.map(({ name }) => name)
})
