<template>
  <div class="max-h-[400px] overflow-hidden relative">
    <NuxtImg
      src="/hero.webp"
      alt="Hero image"
      sizes="sm:100vw"
      class="w-full h-[400px] object-cover grayscale"
    />
    <div class="absolute inset-0 bg-black/20">
      <div class="container flex flex-col h-full justify-center text-white">
        <h1 data-aos="fade-right">
          Lorum ipsum dolor
        </h1>
        <p
          class="max-w-[400px] text-pretty"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Lorum ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
</template>
