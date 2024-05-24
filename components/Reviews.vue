<script  setup lang="ts">
import reviews from '@/constants/reviews.json'

const trigger = ref<HTMLDivElement>()
const swiperRef = ref()

const sliderVisible = useElementVisibility(trigger)

whenever(sliderVisible, () => {
  swiperRef.value.$el.swiper.slideNext()
})
</script>

<template>
  <div
    id="reviews"
    class="container space-y-6"
  >
    <h2>
      Wat mensen van ons vinden
    </h2>
    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="{ review, name, image } in reviews"
        :key="name"
        class="rounded-lg overflow-hidden border border-slate-900 grayscale hover:grayscale-0 transition-all duration-300"
      >
        <div class="aspect-video">
          <NuxtImg
            :src="image"
            alt="MEMICO Realisaties"
            class="h-full w-full object-cover"
            sizes="xl:80vw lg:80vw md:80vw sm:100vw xs:100vw"
          />
        </div>
        <p class="px-4 py-2 font-bold">
          {{ name }}
        </p>
        <p class="px-4 pb-2">
          {{ review }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-button-prev, .swiper-button-next {
  --swiper-navigation-size: 20px;

  @apply icon-btn text-white py-6 px-5 shadow-md;
}

.swiper-slide-active {
  @apply animate-to-color;
}

.swiper-slide:not(.swiper-slide-active) {
  filter: grayscale(100%);
}
</style>
