<script  setup lang="ts">
const images = await $fetch('/api/images')
const trigger = ref<HTMLDivElement>()
const swiperRef = ref()

const sliderVisible = useElementVisibility(trigger)

whenever(sliderVisible, () => {
  swiperRef.value.$el.swiper.slideNext()
})
</script>

<template>
  <div id="realisaties">
    <h2
      class="container pb-6"
      data-aos="fade-right"
    >
      Realisaties
    </h2>
    <Swiper
      ref="swiperRef"
      slides-per-view="auto"
      loop
      grab-cursor
      observer
      centered-slides
      navigation
      :speed="1000"
      :modules="[SwiperNavigation]"
    >
      <SwiperSlide
        v-for="image in images"
        :key="image"
        class="max-w-[90vw] sm:max-w-[60vw] aspect-video mx-2 sm:mx-5"
      >
        <NuxtImg
          :src="`/Realisaties/${image}`"
          alt="MEMICO Realisaties"
          class="rounded-xl h-full w-full object-cover"
          sizes="xl:80vw lg:80vw md:80vw sm:100vw xs:100vw"
        />
      </SwiperSlide>
    </Swiper>
    <div ref="trigger" />
  </div>
</template>

<style>
.swiper-button-prev, .swiper-button-next {
  --swiper-navigation-size: 20px;
  --swiper-navigation-color: #fff;

  @apply bg-slate-900 text-white p-4 font-bold rounded-md w-fit  py-6 px-5 shadow-md;
}

.swiper-slide-active {
  animation: toColor 1s;
}

.swiper-slide:not(.swiper-slide-active) {
  filter: grayscale(100%);
}

@keyframes toColor {
  0%    { filter: grayscale(100%); }
  25%   { filter: grayscale(75%); }
  50%   { filter: grayscale(50%); }
  75%   { filter: grayscale(25%); }
  100%  { filter: grayscale(0%); }
}
</style>
